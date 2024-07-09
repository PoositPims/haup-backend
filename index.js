const express = require("express");
const port = 3000;
// const Sequelize = require("sequelize");
const carRoute = require("./routes/carRoute");

const cors = require("cors");

// const sequelize = new Sequelize("postgres", "postgres", "171944", {
//   host: "localhost",
//   dialect: "postgres",
//   port: 5432,
// });

const startApp = async () => {
  const app = express();
  const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  app.use("/cars", carRoute);

  app.use((req, res, next) => {
    res.status(404).json({ message: "this resource is not found" });
  });

  //handle error
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
  });

  async function connectToDatabase() {
    try {
      await sequelize.authenticate();
      console.log(
        "Connection to PostgreSQL database has been established successfully."
      );
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  connectToDatabase();

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

startApp();
