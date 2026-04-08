const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from server...");
});
// Listen to income request from a client
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
