const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('header.pug');
});

app.get('/auth/google', (req, res) => {
    res.render('form.pug');
});

app.get('/logged', (res, req) => {
    res.render('logged.pug', {username: req.query.username});
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});