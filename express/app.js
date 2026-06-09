const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from the server!!!");
});

app.post("/", (req, res) => {
  res.status(200).json({ message: "Hello again...", app: "Natours" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening to server on port ${port}...`);
});
