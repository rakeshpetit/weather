var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3100, function()
{
  console.log('Express server running in port 3000');
});
