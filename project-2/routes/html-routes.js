var path = require("path");

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
  
  app.put("/inputs", function(req, res) {
    res.sendFile(path.join(_dirname), "../public/inputs.html")  
  });
};
