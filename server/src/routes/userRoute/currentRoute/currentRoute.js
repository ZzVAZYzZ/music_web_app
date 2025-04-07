const express = require("express");
const { current } = require("../../../controllers/userController");

const router = express.Router();
// private
router.route('/current').get(current);




module.exports = router;