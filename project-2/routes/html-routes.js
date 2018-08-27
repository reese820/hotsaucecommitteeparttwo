var path = require("path");
const express = require('express');
const Router = require('router');
var fs = require("fs");
let router = Router();
express.router();

module.exports = function(app) {

  app.get("/inputs", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/inputs.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

  app.post("/response", function(req, res) {
    res.sendFile(path.join(_dirname, "/../public/response.html"))  
  });
  
  app.put("/model", function(req, res) {
    res.sendFile(path.join(_dirname), "/../public/model.html")  
  });
};
