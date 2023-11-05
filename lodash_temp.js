const temp = require("lodash");

const item = [1, [2, 3]];
let ans = temp.flattenDeep(item);

console.log(ans);
