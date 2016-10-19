// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');
var S3Adapter = require('parse-server').S3Adapter;
var ParseDashboard = require('parse-dashboard');
var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
var dashboard = new ParseDashboard({
  "allowInsecureHTTP": true,
  "apps": [
      {
        "serverURL": process.env.SERVER_URL,
      "appId": process.env.APP_ID,
      "masterKey": process.env.MASTER_KEY,
      "appName": "Streek",
      "javascriptKey": process.env.JAVASCRIPT_KEY,
      "restKey": process.env.REST_KEY,
      }
  ],
    "users": [
    {
      "user":"user1",
      "pass":process.env.USER1_PASS
    },
       {
      "user":"user2",
      "pass":process.env.USER2_PASS
    }
  ]
}, true);

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'myAppId',
  fileKey: process.env.FILE_KEY,
  masterKey: process.env.MASTER_KEY || '', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',  // Don't forget to change to https if needed
  push: {
    ios: [
      {
        pfx: 'cert.p12',
        bundleId: 'com.streek',
        production: true
      },
       {
        pfx: 'cert2.0.p12',
        bundleId: 'com.streek2.0',
        production: true
      },
      {
        pfx: 'certProd.p12',
        bundleId: 'com.streek',
        production: false
      },
       {
        pfx: 'certProd2.0.p12',
        bundleId: 'com.streek2.0',
        production: false
      }
    ]
  },
  liveQuery: {
    classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
  },
  filesAdapter: new S3Adapter(
    process.env.S3_ACCESS_KEY,
    process.env.S3_SECRET_KEY,
    process.env.S3_BUCKET,
    {directAccess: true})

});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

//dashboard route
app.use("/dashboard", dashboard);

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
