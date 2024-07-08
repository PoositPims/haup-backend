const express = require("express");
const router = express.Router();
const carController = require("../contraollers/carController");

router.get("/allCar", carController.getAllCar);
// router.get("/allCar", function (req, res) {
//   res.send({ type: "GET" });
// });
router.post("/createCar", carController.createCar);
// router.post("/createCar", function (req, res) {
//   res.send({ type: "POST" });
// });
router.delete("/:id", carController.deleteCar);

module.exports = router;
