const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/../dev-data/data.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview page...");
  } else if (pathName === "/api") {
    res.end(data);
  } else if (pathName === "/products") {
    res.end("This is the product Page...");
  } else {
    res.writeHead(400, {
      "Content-type": "text/html",
      "my-own-header": "Gifftybabe",
    });
    res.end("<hi>Page Not Found </hi>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server at port: 8000");
});
