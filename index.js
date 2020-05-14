const express = require('express');
require('./services/passport');

const app = express();
//const authRoutes = require('./routes/authRouts'); istead of this
//authRoutes(app); and that we just can do 
//require('./routes/authRouts')(app)
require('./routes/authRouts')(app);






const PORT = process.env.PORT || 8080;

app.listen(PORT);