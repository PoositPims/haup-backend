const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

// module.exports = (Sequelize, DataTypes) => {
const Car = sequelize.define("Car", {
  carBrand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carRegist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carPic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// return Car;

(async () => {
  await sequelize.sync({ force: true }); // Use { alter: true } if you don't want to drop tables
  console.log("The table for the User model was just (re)created!");
})();

module.exports = Car;
// };
