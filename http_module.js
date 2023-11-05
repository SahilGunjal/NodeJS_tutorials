const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("In the Home Page");
  } else if (req.url === "/about") {
    res.end("This is my about page");
  } else {
    res.end(`
  <h1> OOps! </h1>
  <p>Page not found </p>
  <a href='/'>Home Page</a>
  `);
  }
});

server.listen(8080);
