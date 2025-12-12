const express = require('express');
const router = express.Router();
const { readJSONFile, writeJSONFile } = require('../utils/fileOperations');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'products.json');

router.get('/', async (req, res) => {
  const products = await readJSONFile(productsFile);
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const products = await readJSONFile(productsFile);
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.post('/', async (req, res) => {
  if (!req.session.isLoggedIn || req.session.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized. Admin access required.' });
  }

  const products = await readJSONFile(productsFile);
  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    ...req.body,
    createdAt: new Date().toISOString()
  };

  products.push(newProduct);
  const success = await writeJSONFile(productsFile, products);

  if (success) {
    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      product: newProduct
    });
  } else {
    res.status(500).json({ message: 'Failed to add product' });
  }
});

router.put('/:id', async (req, res) => {
  if (!req.session.isLoggedIn || req.session.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized. Admin access required.' });
  }

  const products = await readJSONFile(productsFile);
  const index = products.findIndex(p => p.id === parseInt(req.params.id));

  if (index !== -1) {
    products[index] = {
      ...products[index],
      ...req.body,
      id: products[index].id,
      updatedAt: new Date().toISOString()
    };

    const success = await writeJSONFile(productsFile, products);
    if (success) {
      res.json({
        success: true,
        message: 'Product updated successfully',
        product: products[index]
      });
    } else {
      res.status(500).json({ message: 'Failed to update product' });
    }
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.delete('/:id', async (req, res) => {
  if (!req.session.isLoggedIn || req.session.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized. Admin access required.' });
  }

  const products = await readJSONFile(productsFile);
  const filteredProducts = products.filter(p => p.id !== parseInt(req.params.id));

  if (filteredProducts.length < products.length) {
    const success = await writeJSONFile(productsFile, filteredProducts);
    if (success) {
      res.json({
        success: true,
        message: 'Product deleted successfully'
      });
    } else {
      res.status(500).json({ message: 'Failed to delete product' });
    }
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
