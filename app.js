
/**
 * Module dependencies.
 */

var express = require('express')
  , fs      = require('fs');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.use(express.bodyParser({uploadDir:'./public/uploaded'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.post('/upload', function(req, res) {
  if(req.xhr) {
    var name = req.header('X-File-Name'),
        dest = fs.createWriteStream(__dirname + '/public/uploaded/' + name);

    console.log('Recieving ' + name + '...');

    req.on('data', function(data) {
      dest.write(data);
    });

    req.on('end', function() {
      console.log('All Done!!!!');
    });
  }
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
