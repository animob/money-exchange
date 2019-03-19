// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var smallChange = {};
    var money = currency;

    if (money > 10000) {
        smallChange.error = "You are rich, my friend! We don't have so much coins for exchange";
        return smallChange;
    } else if (money <= 0) {
        return smallChange;
    }

    if (money / 50 >= 1) {
        smallChange["H"] = Math.floor(money / 50);
        money -= 50 * Math.floor(money / 50);
    }

    if (money / 25 >= 1) {
        smallChange["Q"] = Math.floor(money / 25);
        money -= 25 * Math.floor(money / 25);
    }

    if (money / 10 >= 1) {
        smallChange["D"] = Math.floor(money / 10);
        money -= 10 * Math.floor(money / 10);
    }

    if (money / 5 >= 1) {
        smallChange["N"] = Math.floor(money / 5);
        money -= 5 * Math.floor(money / 5);
    }

    if (money / 1 >= 1) {
        smallChange["P"] = Math.floor(money / 1);
        money -= 1 * Math.floor(money / 1);
    }
    return smallChange;
}
