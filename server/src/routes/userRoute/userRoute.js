const express = require("express");
const router = express.Router();

const loginRoute = require('./loginRoute/loginRoute');
const registerRoute = require('./registerRoute/registerRoute');
const currentRoute = require('./currentRoute/currentRoute');
const logoutRoute = require('./logoutRoute/logoutRoute');
const refreshRoute = require('./refreshCurrentRoute/refreshCurrentRoute');
const { validateAccessToken } = require("../../middlewares/validateAccessToken");



router.use('/users',loginRoute);
router.use('/users',registerRoute);
router.use('/users',logoutRoute);
router.use('/users',validateAccessToken,currentRoute);
router.use('/users',refreshRoute);


module.exports = router;