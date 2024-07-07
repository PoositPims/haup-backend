const express = require("express");
const router = express.Router();
const carController = require("../contraollers/carController");

router.get("allCar", carController.get);
router.post("createCar", carController.createCar);
router.delete("/:id", carController.deleteCar);

module.exports = router;
