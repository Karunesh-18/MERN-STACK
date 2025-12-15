const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const{getCart, addToCart} = require('../controller/cartController');
const router = express.Router();

router.get('/', authMiddleware, getCart);
router.post('/', authMiddleware, addToCart);

module.exports = router;