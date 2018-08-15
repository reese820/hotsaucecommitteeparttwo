const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");
const chart = require("chart.js");
const moments = require("moment");
const math = require("mathjs");
const routes = require("");
const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.static("models"));
app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

var orm = require("./config/orm.js");
orm.selectAndOrder("stock_ticker", "company_name", "CUSIP");
orm.selectWhere("stock_ticker", "company_name", "CUSIP");
orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
