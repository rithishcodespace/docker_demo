const express = require("express");
const { getProfile } = require("../controllers/userController");
const router = express.Router();

router.get("/user/get-profile/:id",getProfile);

module.exports = router;