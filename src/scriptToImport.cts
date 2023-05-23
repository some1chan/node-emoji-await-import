import * as nodeEmoji from "node-emoji";

// Upon accessing the property, it crashes
console.log(nodeEmoji != undefined);

// (Will never run)
console.log(nodeEmoji.emojify("it works! :heart:"));
