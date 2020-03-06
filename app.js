const express = require('express');
const ejs = require('ejs');
const path = require('path');
const moment = require('moment');

const app = express();

app.use(function(req, res, next) {
    res.locals.year = moment().format('YYYY');
    next();
  });

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', function(req,res){
    res.render('index',{title: 'Home'});
});


app.get('/about', function(req,res){
    res.render('about',{title: 'About'});
});

app.get('/gallery', function(req,res){
    res.render('gallery',{title: 'Gallery'});
});

app.get('/contact', function(req,res){
    res.render('contact',{title: 'Contact'});
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
  });

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});