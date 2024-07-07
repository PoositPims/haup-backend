const { Car } = require("../models");
// get All
exports.getAllCar = async (req, res, next) => {
  try {
    const car = await Car.findALL;
    res.json(car);
  } catch (err) {
    next(err);
  }
};
// get by id

// create
exports.createCar = async (req, res, next) => {
  try {
    const car = await Car.create({
      carBrand,
      carModel,
      carRegist,
      province,
      status,
      carPic,
    });
    res.status(200).json({ car });
  } catch (err) {
    next(err);
  }
};

// update
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
