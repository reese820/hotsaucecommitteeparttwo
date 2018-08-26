$(document).ready(function() {
    // Getting a reference to the input field where user adds a new stocks
    var $newItemInput = $("input.new-item");
    // Our new stocks will go inside the stocksContainer
    var $stocksContainer = $(".stocks-container");
    // Adding event listeners for deleting, editing, and adding stocks
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".stocks-item", editstocks);
    $(document).on("keyup", ".stocks-item", finishEdit);
    $(document).on("blur", ".stocks-item", cancelEdit);
    $(document).on("submit", "#stocks-form", insertstocks);
  
    // Our initial stocks array
    var stocks = [];
  
    // Getting stocks from database when page loads
    getStocks();
  
    // This function resets the stocks displayed with new stocks from the database
    function initializeRows() {
      $stocksContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < stocks.length; i++) {
        rowsToAdd.push(createNewRow(stocks[i]));
      }
      $stocksContainer.prepend(rowsToAdd);
      insertStocks();
    }
  
    // This function grabs stocks from the database and updates the view
    function getStocks() {
      $.get("/api/stocks", function(data) {
        stocks = data;
        initializeRows();
      });
    }
  
    // This function handles showing the input box for a user to edit a stocks
    function updateStocks() {
      var currentstocks = $(this).data("stocks");
      $(this).children().hide();
      $(this).children("input.edit").val(currentstocks.text);
      $(this).children("input.edit").show();
      $(this).children("input.edit").focus();
    }
  
    // Toggles complete status
    function toggleComplete(event) {
      event.stopPropagation();
      var stocks = $(this).parent().data("stocks");
      stocks.complete = !stocks.complete;
      updateStocks(stocks);
    }
  
    // This function starts updating a stocks in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
      var updatedStocks = $(this).data("stocks");
      if (event.which === 13) {
        updatedStocks.text = $(this).children("input").val().trim();
        $(this).blur();
        updateStocks(updatedstocks);
      }
    }
  
    // This function updates a stocks in our database
    function updateStocks(stocks) {
      $.ajax({
        method: "PUT",
        url: "/api/stocks",
        data: stocks
      }).then(getStocks);
    }
  
    // This function is called whenever a stocks item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
      var currentstocks = $(this).data("stocks");
      if (currentstocks) {
        $(this).children().hide();
        $(this).children("input.edit").val(currentstocks.text);
        $(this).children("span").show();
        $(this).children("button").show();
      }
    }
  
    // This function constructs a stocks-item row
    function createNewRow(stocks) {
      var $newInputRow = $(
        [
          "<li class='list-group-item stocks-item'>",
          "<span>",
          stocks.text,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-danger'>x</button>",
          "<button class='complete btn btn-primary'>✓</button>",
          "</li>"
        ].join("")
      );
  
      $newInputRow.find("button.delete").data("id", stocks.id);
      $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("stocks", stocks);
      if (stocks.complete) {
        $newInputRow.find("span").css("text-decoration", "line-through");
      }
      return $newInputRow;
      insertStocks();
    }
  
    // This function inserts a new stocks into our database and then updates the view
    function insertStocks(event) {
      event.preventDefault();
      var stocks = {
        text: $newItemInput.val().trim(),
        complete: false
      };  
      $.post("/api/stocks", stocks, getStocks);
      $newItemInput.val("");
    }
  });
  