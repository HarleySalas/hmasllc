## HM Accounting Services, LLC Wesbite.

To run this website, you'd have to setup a local wordpress environment and run create-react-wptheme from https://www.npmjs.com/package/create-react-wptheme

You can then go in to ./wp-content/themes/YOUR-THEME-NAME/react-src and clone this project in to that folder for it to run. You may have to verify your package.json home directory to make sure it will run properly.

## About This Project.

This website was created for an Accounting business in South Florida with the purpose of having a modern, responsive website. They opted to have a blog and with the project timeline alotted, I figured I'd give the Wordpress REST API a try.

## Integrations
The client wanted to use their https://www.activecampaign.com/ account to collect users, so a mailing list form is implemented on the landing page. To make this function work locally, you'd have to add a "ActiveCampaign.php" file to ./wp-content/themes/YOUR-THEME-NAME/react-src/public with an `$API_KEY = "YOUR_API_KEY"` variable. Contacts signing up will then immediately be added to your Active Campaign contacts list.

## Further Details...
This project is built entirely with Functional Components/Hooks.