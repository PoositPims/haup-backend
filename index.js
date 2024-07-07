const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  //   password: "yourpassword", // replace with your MySQL root password
  //   database: "mydatabase",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

app.use(bodyParser.json());

// app.get("/users", (req, res) => {
//   connection.query("SELECT * FROM car", (error, results) => {
//     if (error) {
//       return res.status(500).send(error);
//     }
//     res.send(results);
//   });
// });

app.post("/data", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost==>:${port}`);
});
