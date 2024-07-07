module.exports = (Sequelize, DataTypes) => {
  const Car = Sequelize.define("Car", {
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

  return Car;
};
