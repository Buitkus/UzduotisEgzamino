const mongoose = require("mongoose");

const Ad = mongoose.model(
  "Ad",
  new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Please add a name"],
    },
    description: {
      type: String,
      trim: true.valueOf,
      required: [true, "Please add a description"],
    },
    image: {
      type: String,
      required: [true, "Please add a image"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = Ad;
