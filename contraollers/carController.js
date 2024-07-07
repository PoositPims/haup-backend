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
