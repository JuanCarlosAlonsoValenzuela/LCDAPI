const express = require('express');
const app = express();
const morgan = require('morgan');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Variables
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./routes/'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})