const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
} = require("../../controllers/userController");

const { protectAdmin } = require("../../middleware/adminAuthMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/users", getUsers);
router.get("/:id", getUser);
router.route("/:id").delete(protectAdmin, deleteUser);

module.exports = router;
