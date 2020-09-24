const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  flavor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  benefits: {
    portions: Number,
    mise: Number,
    isClientHappy: Boolean,
  },
  isInStock: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("food", FoodSchema);
