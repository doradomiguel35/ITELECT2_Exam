var express = require('express');
var path = require('path');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/login.html'));
});
app.get('/register', function(req, res){
  res.sendFile(path.join(__dirname, 'views/register.html'));
});
app.get('/success', function(req, res){
  res.sendFile(path.join(__dirname, 'views/login_success.html'));
});
app.get('/register_success', function(req, res){
  res.sendFile(path.join(__dirname, 'views/register_success.html'));
});
app.get('/users', function(req, res){
  res.sendFile(path.join(__dirname, 'views/users_page.html'));
});
app.get('/mark', function(req, res){
  res.sendFile(path.join(__dirname, 'views/mark_profile.html'));
});
app.get('/jacob', function(req, res){
  res.sendFile(path.join(__dirname, 'views/jacob_profile.html'));
});
app.get('/larry', function(req, res){
  res.sendFile(path.join(__dirname, 'views/larry_profile.html'));
});
app.get('/edit', function(req, res){
  res.sendFile(path.join(__dirname, 'views/edit_profile.html'));
});
app.get('/saved', function(req, res){
  res.sendFile(path.join(__dirname, 'views/saved_profile.html'));
});
app.get('/logout', function(req, res){
  res.sendFile(path.join(__dirname, 'views/logout_success.html'));
});
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});