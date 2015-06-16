var express = require('express'),
        app = express();

app.get('/', function(req, res){
    res.send('This is a GET request');
});

app.get('/admin', function(req, res){
    res.send('This is the admin request');
});

app.listen(3000, function(){
    console.log('Server running at http://localhost:3000');
});