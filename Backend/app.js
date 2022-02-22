//doteenv import
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const movieRoutes = require('./routes/movieRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors()) // used for cross site
app.use(bodyParser.json()); //use == for middelware
app.use(helmet());
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})

// app.use(express.static(path.join(__dirname, 'public')));



app.use('/', movieRoutes);
app.use('/', orderRoutes);

module.exports = app;
