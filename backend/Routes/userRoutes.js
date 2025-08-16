const express = require("express");
const { getProfile, updateProfile } = require("../controllers/userController");
const router = express.Router();

router.get("/user/get-profile/:id",getProfile);
router.patch("/user/update-profile",updateProfile);

module.exports = router;