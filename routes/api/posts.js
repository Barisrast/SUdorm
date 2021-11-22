const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Post = require("../../models/Post");
const User = require("../../models/User");
const checkObjectId = require("../../middleware/checkObjectId");

// @router  GET api/posts
// @desc    test route
// @access  public

router.get("/", (req, res) => res.send("posts route"));

module.exports = router;
