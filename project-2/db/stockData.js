const si = require('stock-info');
const Hypergrid = require('fin-hypergrid');
const MyGrid = new Hypergrid(container, options);
let stock = 'D';
let stocksData = [];

si.getSingleStockInfo(stock).then(stock => {
    stocksData.push({
        ticker: stock.symbol,
        companyName: stock.shortName,
        closingPrice: stock.regularMarketPrice,
        divYield: stock.trailingAnnualDividendRate
    });
    console.log(stocksData)
});

module.exports = stocksData;