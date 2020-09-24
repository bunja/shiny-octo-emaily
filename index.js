const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

//const authRoutes = require('./routes/authRouts'); istead of this
//authRoutes(app); and that we just can do 
//require('./routes/authRouts')(app)

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRouts')(app);
require('./routes/billingRouts')(app);





const PORT = process.env.PORT || 8080;

app.listen(8080, function() {
    console.log("port 8080 I'm listening.");
});