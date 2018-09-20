// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const exchange = {};
    
    function buildExchangeObject(val) {
        if (val > 10000) {
            exchange["error"] = "You are rich, my friend! We don't have so much coins for exchange";
        } else if (val >= 50) {
            exchange["H"] = Math.floor(val/50);
            buildExchangeObject(val%50);
        } else if(val >= 25) {
            exchange["Q"] = Math.floor(val/25);
            buildExchangeObject(val%25);
        } else if(val >= 10) {
            exchange["D"] = Math.floor(val/10);
            buildExchangeObject(val%10);
        } else if(val >= 5) {
            exchange["N"] = Math.floor(val/5);
            buildExchangeObject(val%5);
        } else if(val >= 1) {
            exchange["P"] = val/1
        } else if (val === 0 ) return;
    }
    buildExchangeObject(currency)

    return exchange;
}
