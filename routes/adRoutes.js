const express = require("express");
const router = express.Router();

const { protect } = require("../../middleware/authMiddleware");

const {
  getAllAds,
  setAd,
  getUserAds,
  deleteAd,
  updateAd,
} = require("../../controllers/adController");

router.route("/").get(getAllAds).post(protect, setAd);
router.get("/users", protect, getUserAds);
router.route("/:id").delete(protect, deleteAd).put(protect, updateAd);

module.exports = router;
