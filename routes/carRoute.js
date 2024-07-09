const express = require("express");
const router = express.Router();
const carController = require("../contraollers/carController");

router.get("/allCar", carController.getAllCar);
router.get("/:id", carController.getCarById);
router.post("/createCar", carController.createCar);
router.delete("/:id", carController.deleteCar);
router.put("/:id", carController.updateCar);

module.exports = router;
