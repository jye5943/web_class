var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/', function(req, res){
    res.send("hello world");
});

app.get('/test', function(req, res){
    res.send("hello world2");
});

app.get('/글쓰기', function(req, res){
    res.sendfile("글쓰기.html");
});

app.get('/', function(req, res){
    res.send("hello world");
});

app.get('/test', function(req, res){
    res.send("hi");
});

app.get('/write', function(req, res){
    res.sendfile("글쓰기.html");
});
app.get('/table', function(req, res){
    res.sendfile("table.html");
});

app.get('/style', function(req, res){
    res.sendfile("style.html");

});

app.get('/0402_idpassword', function(req, res){
    res.sendfile("0402_idpassword.html");
});

app.get('/0402_double', function(req, res){
    res.sendfile("0402_double(곱하기).html");
});

app.get('/login', function(req, res){
    res.sendfile("login.html");
});
