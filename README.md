# shiny-octo-emaily

This app allows to run survey campaigns through email.

It is based on "Node with React: Fullstack Web development" course.



Main features:
* logging in with Google
* creating a survey
* sending a survey 

Tech Stack:
* ExpressJS, MongoDB, PassportJS, React, Redux, ReduxForm, Stripe, SendGrid

## How to run
It was tested with node v8.11.4 and v12.16.3

First, install the dependencies for the server:

```
npm install
```

Then, install the dependencies for the client:

```
cd client
npm install
cd ..
```


Configure the application. Create a `dev.js` file in `config`:

```
module.exports = {
    googleClientID: <GOOGLE_CLIENT_ID>,
    googleClientSecret: <GOOGLE_CLIENT_SECRET>,
    mongoURI: <MONGO_URI>,
    cookieKey: <JUST_A_RANDOM_STRING>,
    stripePublishableKey: <STRIPE_PUBLISHABLE_KEY>,
    stripeSecretKey: <STRIPE_SECRET_KEY> ,
    sendGridKey: <SEND_GRID_KEY>,
    senderEmail: <SENDER_EMAIL>,
    redirectDomain: 'http://localhost:3000'
}
```

To run it, do:

```
npm run dev
```

To use sendgrid locally, run this command:

```
npx ngrok http 8080
```

Take the url ngrok generated, and put it to the sendgrid config in events webhook

For example, it may look like that: http://89edfad5ce0e.ngrok.io

After that, links from sendgrind will work
