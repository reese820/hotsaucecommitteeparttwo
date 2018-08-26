var fs = require("fs");
let si = require('stock-info');

module.exports = function (app) {

  app.get("/", function (req, res) {
    console.log("Index page");
    res.send("index");
  });
  app.get("/api/stocks/:symbol", function (req, res) {
    let stocksData = [];

    si.getSingleStockInfo(req.params.symbol).then(stock => {
      stocksData.push({
        ticker: stock.symbol,
        companyName: stock.shortName,
        closingPrice: stock.regularMarketPrice,
        divYield: stock.trailingAnnualDividendRate
      });
      console.log(stocksData);
      res.json({data: stocksData});
    });
  }),
  app.put("/api/stocks/:symbol", function (req, res) {
    let stocksData = [];

    si.getSingleStockInfo(req.params.symbol).then(stock => {
      stocksData.push({
        ticker: stock.symbol,
        companyName: stock.shortName,
        closingPrice: stock.regularMarketPrice,
        divYield: stock.trailingAnnualDividendRate
      });
      console.log(stocksData);
      res.json({data: stocksData});
    });
  });
};