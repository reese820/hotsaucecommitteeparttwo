$.ajax('/api/stocks/:symbol', {
    type: "POST",
    data: stock
}).then(
    function() {
        console.log("New stock added: " + stock);
        location.reload();
    }
);