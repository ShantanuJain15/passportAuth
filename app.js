const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const PORT = process.env.PORT || 5000;

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(
    'mongodb://127.0.0.1:27017/local',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// all routes are added
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));



app.listen(PORT, console.log(`Server started at ${PORT}`));