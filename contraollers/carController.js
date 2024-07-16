const Car = require("../models/Car");

// get All
exports.getAllCar = async (req, res, next) => {
  try {
    const car = await Car.findAll({});
    res.json({ car });
  } catch (err) {
    next(err);
  }
};

// get by id
exports.getCarById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.findOne({
      where: { id: id },
    });
    res.json({ car });
  } catch (err) {
    next(err);
  }
};

// create
exports.createCar = async (req, res, next) => {
  try {
    const { carBrand, carModel, carRegist, province, isAvailable, carPic } =
      req.body;

    const car = await Car.create({
      carBrand,
      carModel,
      carRegist,
      province,
      isAvailable,
      carPic,
    });
    res.status(200).json({ car });
  } catch (err) {
    next(err);
  }
};

// update
exports.updateCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { carBrand, carModel, carRegist, province, isAvailable, carPic } =
      req.body;
    const [rows] = await Car.update(
      {
        carBrand,
        carModel,
        carRegist,
        province,
        isAvailable,
        carPic,
      },
      {
        where: { id },
      }
    );
    if (rows === 0)
      return res.status(400).json({ message: "cannot update list" });
    res.status(200).json({ message: "update success" });
  } catch (err) {
    next(err);
  }
};

// delete
exports.deleteCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const row = await Car.destroy({
      where: {
        id,
      },
    });
    if (row === 0) {
      return res.status(400).jsom({ message: "cannot delete" });
    }
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
