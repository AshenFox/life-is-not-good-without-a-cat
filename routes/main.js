const express = require("express");
const router = express.Router();

const Food = require("../models/Food");

// @route ------ GET api/food
// @desc ------- Get food items
// @access ----- Public

router.get("/", async (req, res) => {
  try {
    let foodItems = await Food.find({});

    if (foodItems.length) {
      res.status(200).json(foodItems);
    } else {
      res.status(200).json({ msg: "None items found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route ------ POST api/food
// @desc ------- Register food items
// @access ----- Public

router.post("/", async (req, res) => {
  try {
    let foodArr = req.body;

    let arrId = [];

    for (let item of foodArr) {
      let foodItem = Food(item);
      await foodItem.save();
      arrId.push(foodItem._id);
    }

    res.status(201).json({ arrId });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route ------ DELETE api/food
// @desc ------- Delete one food item
// @access ----- Public

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let foodItem = await Food.findById(id);

    if (!foodItem) return res.status(404).json({ msg: "Food item not found" });

    await Food.findByIdAndDelete(id);

    res.status(200).json({ msg: "Food item removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route ------ DELETE api/food
// @desc ------- Delete all food items
// @access ----- Public

router.delete("/", async (req, res) => {
  try {
    await Food.deleteMany({}, (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "All food items has been deleted!" });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
