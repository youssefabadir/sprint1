require('./api/config/DBConnection');
var express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  cors = require('cors'),
  helmet = require('helmet'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  routes = require('./api/routes/index'),
  config = require('./api/config/Config'),
  passport = require('passport'),

  app = express();

  port = 3000;

  // cors middleware
  app.use(cors());
  
  // set static folder

  app.use(express.static(path.join(__dirname, 'public')));


  // body parser middleware
  app.use(bodyParser.json());

  // passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  require('./api/config/passport')(passport);


  app.use('/api', routes);
  
  // index route
  app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
  });

  // start server
  app.listen(port, () => {
    console.log('Server started on port ' + port);

  });

app.set('secret', config.SECRET);

app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  })
);
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//app.use('/api', routes);

// 500 internal server error handler
app.use(function(err, req, res, next) {
  if (err.statusCode === 404) return next();
  res.status(500).json({
    // Never leak the stack trace of the err if running in production mode
    err: process.env.NODE_ENV === 'production' ? null : err,
    msg: '500 Internal Server Error',
    data: null
  });
});

// 404 error handler
app.use(function(req, res) {
  res.status(404).json({
    err: null,
    msg: '404 Not Found',
    data: null
  });
});

app.js

module.exports = app;
