const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');


router.post('/register', authController.RegisterUser);
router.post('/login', authController.LoginUser);
router.post('/create-admin', authController.CreateAdminUser);
module.exports = router;
