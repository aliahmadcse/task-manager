"use strict";

var _interopRequireDefault = require("C:/Users/aliah/Desktop/mevn-stack/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _env = require("./config/env");

var _db = require("./config/db");

var app = (0, _express.default)();
// setting up environment
(0, _env.setEnv)(app); // connecting to database

(0, _db.connectToDB)(); // making api routes available

(0, _routes.registerApiRoutes)(app);
app.get('/', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist/'
    });
  }
}); // matches any route

app.get('*', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist/'
    });
  }
});
app.listen(process.env.PORT, function () {
  return console.log("Task manager app listening at port 3000 in ".concat(process.env.NODE_ENV));
});