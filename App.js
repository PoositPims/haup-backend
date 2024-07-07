require("dotenv").config();
const express = require("express");
const cors = require("cors");
const carRoutes = require("./routes/carRoute");

const startApp = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/public", express.static("public"));

  app.use("/allCar", carRoutes);

  app.use((err, req, res, next) => {
    console.log("err", err);
    res.status(500).json({ message: "err" });
  });
  app.listen(3000, () => console.log("server running on port 3000"));
};
startApp();
