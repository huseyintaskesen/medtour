﻿#!/usr/bin/env node

/**
 * Module dependencies.
 */




const debug = require("debug")("WebTemplateStudioExpress:server");
const http = require("http");
const app = require("./app");
const CONSTANTS = require("./constants");
const dbpass = "bilkentbitirme";
var MongoClient = require('mongodb').MongoClient;
var db;
var collection;
var server_object;




class Server{
  
  Server(db, collection){
    this.db = db;
    this.collection = collection;
  }

}

// Connect to the db
var databaseInstance = MongoClient
.connect("mongodb://Qikabodi:bilkentbitirme@cluster0-shard-00-00-mezhk.mongodb.net:27017,cluster0-shard-00-01-mezhk.mongodb.net:27017,cluster0-shard-00-02-mezhk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
{ useUnifiedTopology: true },
 function (err, client) {

    if(err) 
      throw err;
    else
      console.log("Connected")
      db = client.db('MedTourDB')
      collection = db.collection('Clinic')
      server_object = new Server(client.db, db.collection)

      //collection = db.collection('Clinic')


      collection.insertOne({id: 999, rating: 9, name:'test clinic', location:'Istanbul'}, (err, result) => {
      })
      

      // collection.find({location: 'Ankara'}).toArray((err, items) => {
      //   console.log(items)
      // })
      app.use(function(req,res,next) {
        req.db = db
        next();
      })

      // module.exports.find_by_location = function(req,res)
      // {
      //   collection.find({location: 'Ankara'}).toArray((err, items) => {
      //     console.log(items)
      //   })
      // }
      
     //Write databse Insert/Update/Query code here..
     //console.log(db.collection('Doctor'))    
});

 
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(CONSTANTS.PORT);
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

  function getClinicByLocation (location){
  collection = db.collection('Clinic')
  collection.find({location: location}).toArray((err, items) => {
    return items;
  })

}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

module.exports = databaseInstance