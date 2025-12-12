const express = require('express');
const router = express.Router();
const { readJSONFile, writeJSONFile } = require('../utils/fileOperations');
const path = require('path');

const cartFile = path.join(__dirname, '..', 'cart.json');
const productsFile = path.join(__dirname, '..', 'products.json');

router.get('/', async (req, res) => {
  const cart = await readJSONFile(cartFile);
  res.json(cart);
});

router.post('/', async (req, res) => {
  const cart = await readJSONFile(cartFile);
  const { productId, quantity = 1 } = req.body;

  const products = await readJSONFile(productsFile);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const existingItemIndex = cart.findIndex(item => item.productId === productId);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: cart.length > 0 ? Math.max(...cart.map(c => c.id)) + 1 : 1,
      productId,
      productTitle: product.title,
      productPrice: product.price,
      productImage: product.image,
      quantity,
      addedAt: new Date().toISOString()
    });
  }

  const success = await writeJSONFile(cartFile, cart);
  if (success) {
    res.json({
      success: true,
      message: 'Item added to cart',
      cart
    });
  } else {
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
});

router.put('/:id', async (req, res) => {
  const cart = await readJSONFile(cartFile);
  const { quantity } = req.body;
  const index = cart.findIndex(item => item.id === parseInt(req.params.id));

  if (index !== -1) {
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }

    const success = await writeJSONFile(cartFile, cart);
    if (success) {
      res.json({
        success: true,
        message: 'Cart updated',
        cart
      });
    } else {
      res.status(500).json({ message: 'Failed to update cart' });
    }
  } else {
    res.status(404).json({ message: 'Cart item not found' });
  }
});

router.delete('/:id', async (req, res) => {
  const cart = await readJSONFile(cartFile);
  const filteredCart = cart.filter(item => item.id !== parseInt(req.params.id));

  if (filteredCart.length < cart.length) {
    const success = await writeJSONFile(cartFile, filteredCart);
    if (success) {
      res.json({
        success: true,
        message: 'Item removed from cart',
        cart: filteredCart
      });
    } else {
      res.status(500).json({ message: 'Failed to remove item' });
    }
  } else {
    res.status(404).json({ message: 'Cart item not found' });
  }
});

router.delete('/', async (req, res) => {
  const success = await writeJSONFile(cartFile, []);
  if (success) {
    res.json({
      success: true,
      message: 'Cart cleared',
      cart: []
    });
  } else {
    res.status(500).json({ message: 'Failed to clear cart' });
  }
});

module.exports = router;
