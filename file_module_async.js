const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("read first successfully");
    const first = result;
    readFile("./content/second.txt", "utf-8", (err2, result2) => {
      if (err2) {
        console.log(err2);
        return;
      } else {
        console.log("read first successfully");
        const second = result2;
        writeFile(
          "./content/result-async.txt",
          `Here  is the result: ${first}, ${second}`,
          (werr, wresult) => {
            if (werr) {
              console.log(werr);
            } else {
              console.log("write successfully");
            }
          }
        );
      }
    });
  }
});
console.log("start new process");
