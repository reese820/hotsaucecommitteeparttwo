const express = require('express');
const Router = require('router');
var fs = require("fs");
let si = require('stock-info');
let router = Router();
express.router();
module.exports = function (app) {

app.get("/", function (req, res) {
  console.log("Index page");
  res.send("index");
});
app.get("/api/inputs/:symbol", function (req, res) {
  console.log("Inputs page");
  res.send("Welcome to the inputs page for " + symbol);
    // let stocksData = [];
    // si.getSingleStockInfo(req.params.symbol).then(stock => {
    //   stocksData.push({
    //     ticker: stock.symbol,
    //     companyName: stock.shortName,
    //     closingPrice: stock.regularMarketPrice,
    //     divYield: stock.trailingAnnualDividendRate
    //   });
    //   console.log(stocksData);
    //   res.json({data: stocksData});
    //}),
  });
  app.put("/api/inputs/:symbol", function (req, res) {
    console.log("Inputs page");
    res.send("Welcome to the inputs page for " + symbol);
    // let stocksData = [];
    // si.getSingleStockInfo(req.params.symbol).then(stock => {
    //   stocksData.push({
    //     ticker: stock.symbol,
    //     companyName: stock.shortName,
    //     closingPrice: stock.regularMarketPrice,
    //     divYield: stock.trailingAnnualDividendRate
    //   });
    //   console.log(stocksData);
    //   res.json({data: stocksData});
    // });
  });
  app.get("/api/model", function(req, res){
    console.log("Model page");
    res.send("Welcome to the model page.");
  })
};