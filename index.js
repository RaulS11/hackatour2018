var express = require('express'); // documentation: https://expressjs.com/en/4x/api.html
var app = express();
const PORT = 5000; // se corre en localhost

// En la root, envia index.html
app.get('/', function(req,res){ // req:request, res:response
  res.sendFile('index.html', {root: __dirname});
});

// test_locale=5000
app.listen(PORT, function() { // listen(port, anonymous_function)
  console.log('Server running on port 5000.');
});
