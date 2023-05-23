import * as nodeEmoji from "node-emoji";

// Works here
console.log(nodeEmoji.emojify(":heart:"));

// After this runs, it doesn't
await import("./scriptToImport.cjs");
