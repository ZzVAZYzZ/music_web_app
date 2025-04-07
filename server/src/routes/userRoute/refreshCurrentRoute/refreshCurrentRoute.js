const express = require("express");
const { refresh } = require("../../../controllers/userController");

const router = express.Router();
// private
router.route('/refresh').get(refresh);




module.exports = router;