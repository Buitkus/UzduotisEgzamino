const Category = require("../models/Category");
const asyncHandler = require("express-async-handler");

// @desc Add new category
// @route POST /api/category
// @access Private (Only Admin)

const setCategory = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add category");
  }
  // check if category exists
  const categoryExists = await Category.findOne({
    name: req.body.name.toLowerCase(),
  });
  if (categoryExists) {
    res.status(400);
    throw new Error("Category already exists");
  }

  // Create category
  const category = await Category.create({ name: req.body.name.toLowerCase() });
  if (category) {
    res.status(201).send(category);
  } else {
    res.status(400);
    throw new Error("Invalid category data");
  }
});

// @desc Get All categories
// @route GET /api/category
// @access PUBLIC

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).send(categories);
});

// @desc Delete category
// @route DELETE /api/category/:id
// @access PRIVATE

const deleteCategory = asyncHandler(async (req, res) => {
  const categories = await Category.deleteOne({ _id: req.params.id });
  res.status(200).send(categories);
});

module.exports = {
  setCategory,
  getAllCategories,
  deleteCategory,
};
