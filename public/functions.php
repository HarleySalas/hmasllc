<?php

  add_action("rest_api_init", "mailing_post");

  function mailing_post() {
    register_rest_route("mailing/v1", "/post", array(
      "methods" => "POST",
      "callback" => "post_email",
      "args" => array(
        "firstName" => array(
          "type" => "string",
          "required" => "true"
        ),
        "lastName" => array(
          "type" => "string",
          "required" => "true"
        ),
        "email" => array(
          "type" => "string",
          "required" => "true"
        )
      )
    ));
  }

  function post_email($params) {
    $acURL = "https://hmasllc.api-us1.com/api/3/contacts";
    include 'ActiveCampaign.php';
    $ModifiedParams = array(
      "email" => $params->get_param("email"),
      "firstName" => $params->get_param("firstName"),
      "lastName" => $params->get_param("lastName")
        );

    $payload = json_encode( array( "contact" => $ModifiedParams));
    $ch = curl_init($acURL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLINFO_HEADER_OUT, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      'Content-Type: application/json',
      "Api_Token: $API_KEY"
    ));

    $result = curl_exec($ch);

    if ( $result === false) {
      return curl_error($ch);
    }
    curl_close($ch);

    return $result;
  }

  add_action("rest_api_init", "contact_form");

  function contact_form() {
    register_rest_route("/contact/v1", "/post", [
      "methods" => "POST",
      "callback" => "contact_post"
    ]);
  };

  function contact_post($request) {
    $params = $request->get_body();

    $bodyDecoded = json_decode($params, true);

    $name = !empty( $bodyDecoded['name'] ) ? sanitize_text_field( trim( $bodyDecoded['name'] ) ) : '';
    $mail = !empty( $bodyDecoded['mail'] ) ? sanitize_text_field( trim( $bodyDecoded['mail'] ) ) : '';
    $phone = !empty( $bodyDecoded['phone'] ) ? sanitize_text_field( trim( $bodyDecoded['phone'] ) ) : '';
    $company = !empty( $bodyDecoded['company'] ) ? sanitize_text_field( trim( $bodyDecoded['company'] ) ) : '';
    $message = !empty( $bodyDecoded['message'] ) ? wp_kses_post( trim( $bodyDecoded['message'] ) ) : '';


    $errors = [];
    if (empty($name)) {
      $errors[] = 'Your name is required.';
    }
    if (empty($mail)) {
      $errors[] = 'You must provide your email.';
    }
    if ( ! is_email( $mail ) ) {
      $errors[] = 'Invalid Email.';
    }
    if ( empty( $message ) ) {
      $errors[] = 'You must provide a message.';
    }

    if (count($errors)) {
      return new WP_Error(422, 'contact_form_errors', [
        'type' => 'danger',
        'message' => 'Please confirm the data that is in your form.',
        'errors' => $errors
      ]);
    }

    $from_email = get_option('admin_email');
    $subject = "[{$name}] has contacted you on HMASLLC!";

    $body = "<p style='margin:0px;padding:0px;'><b>Name:</b> {$name}</p>";
    $body .= "<p style='margin:0px;padding:0px;'><b>Email:</b> {$mail}</p>";
    $body .= "<p style='margin:0px;padding:0px;'><b>Phone Number:</b> {$phone}</p>";
    $body .= "<p style='margin:0px;padding:0px;'><b>Company:</b> {$company}</p>";
    $body .= "<p style='margin:0px;padding:0px;'><b>Message:</b> {$message}</p>";

    $headers[] = "Content-Type: text/html";
    $headers[] = "charset=UTF-8";
    $headers[] = "From: New Contact! <{$from_email}>";
    $headers[] = "Reply-To: {$name} <{$mail}>";

    if ( wp_mail( $from_email, $subject, $body, $headers ) ) {
      $response_data = [
        'type' => 'success',
        'message' => 'Message sent!',
        'to' => $from_email,
        'subject' => $subject,
        'body' => $body,
      ];

      $response = new WP_REST_Response($response_data);
      $response->set_status(200);
      return $response;
    } else {
      return new WP_Error( 422, 'contact_form_error', [
        'type' => 'danger',
        'message' => 'Please enter the details correctly.'
      ]);
    }
  }
?>
