const {me} = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I am ${me.name} and i came from ${me.campus}`,
    e : "oO",
    T : "U "
}));
