const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");
const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
//app.use(routes);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.post('/index', function(req, res){
  res.upgrading
})
app.get('/model', function (req, res) {
  //res.render('./home', {stocks:"stock symbol,company name, CUSIP"});
  res.sendFile(path.join(__dirname + '/public/model.html'));
 });

require("./routes/api-routes.js")(app) {
app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
    })
})