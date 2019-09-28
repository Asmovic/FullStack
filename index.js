const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./model/Users');
require('./services/passport');



//Database connection
/* mongoose.Promise = global.Promise; */
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });



const app = express();
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookiekey]
}))

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}


const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT);

console.log('App is running on port: ', PORT);
