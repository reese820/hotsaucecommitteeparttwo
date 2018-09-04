const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");
const chart = require("chart.js");
var path = require('path');

const moments = require("moment");
const math = require("math.js");
//const routes = require("");
const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
//app.use(routes);




var titles = [{ title: "Stock Portfolio Screener and Analyzer"},];


var stocks = [
  {stock: "stock symbol"},
  {stock: "company name"},  
  {stock: "CUSIP"},
];
 

 //var symbols = [{ symbol: "stock symbol"},];

 //var names = [{name: "company name"},];
 
 //var CUSIPS = [{CUSIP: "CUSIP"},];

 
 app.get('/', function (req, res) {
 // res.render('/response', {titles:"Stock Portfolio Screener and Analyzer"});
  //res.send("hello")
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.get('/model', function (req, res) {
  //res.render('./home', {stocks:"stock symbol,company name, CUSIP"});
  res.sendFile(path.join(__dirname + '/public/model.html'));
 });
 //<div class="dropdown">
 // <button onclick="myFunction(req,res)" class="dropbtn" >Dropdown</button>
  //<div id="myDropdown" class="stock symbol">
  //  <a href="#">"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + stock + "&3JPI0D6AEX9B91T5="</a>
  //  <a href="#">Link 2</a>
  //  <a href="#">Link 3</a>
  //</div>
//</div>
//app.get('/', function (req, res) {
//  res.render('main', {symbols: "stock symbol"});
//});

// app.get('/', function (req, res) {
//    res.render('home', {stocks:" "});
 //});

//var orm = require("./config/orm.js");
//orm.selectAndOrder("stock_ticker", "company_name", "CUSIP");
//orm.selectWhere("stock_ticker", "company_name", "CUSIP");
//orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");

app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
});

