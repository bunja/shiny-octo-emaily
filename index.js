const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
require('./models/User');
require('./models/Survey');
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
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    // exspress will serve up production assets
    // like main.js or main.css
    app.use(express.static('client/build'));
    // exspress will serve up index.html file if it doesn't recognize the  route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
});