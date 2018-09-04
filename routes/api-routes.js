var db = require("../models");
const express = require('express');
const Router = require('router');
var fs = require("fs");
let si = require('stock-info');
let router = Router();
express.router();
module.exports = function(app) {
  app.get("/", function (req, res) {
    console.log("Index page");
    res.send("index");
  });
  app.get("/api/inputs/:symbol", function (req, res) {
    console.log("Inputs page");
    res.send("Welcome to the inputs page for " + symbol);

 
 
  //app.get("/api/todos", function(req, res) {

 // });
  //app.post("/api/todos", function(req, res) {

 // });
 // app.delete("/api/todos/:id", function(req, res) {

 // });
 // app.put("/api/todos", function(req, res) {

  });

};
  app.get("/api/model", function(req, res){
    console.log("Model page");
    res.send("Welcome to the model page.");
  });


