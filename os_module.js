const os = require("os");

console.log(os.userInfo());

console.log(os.uptime());

const obj = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(obj);
