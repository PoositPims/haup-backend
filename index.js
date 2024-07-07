const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/data", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
