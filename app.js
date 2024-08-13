const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

module.exports = app;
