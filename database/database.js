const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "171944", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
