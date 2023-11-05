const path = require("path");

console.log(path.sep);

const filePath = path.join("/subfolder", "test.text");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const abs = path.resolve(__dirname, "subfolder", "test.txt");
console.log(abs);
