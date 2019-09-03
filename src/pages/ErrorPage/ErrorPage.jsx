import React from "react";

import "./ErrorPage.scss";

import Button from "../../components/Button/Button.jsx";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page__wrapper">
        <h1 className="error-page__heading">ERROR 404</h1>
        <p className="error-page__message">
          It seems the page you were looking for does not exist.
        </p>
        <Button btnText="Go back" btnStyle="primary" btnSize="md" />
      </div>
    </div>
  );
};

export default ErrorPage;
