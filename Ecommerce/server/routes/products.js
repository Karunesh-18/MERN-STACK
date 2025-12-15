const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  ValidateProductData,
  AdminOnly,
  SanitizeProductData
} = require('../middlewares/productMiddleware');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Failed to fetch product:', error);
    res.status(500).json({ message: 'Failed to fetch product' });
  }
});

router.post('/', authMiddleware, AdminOnly, SanitizeProductData, ValidateProductData, async (req, res) => {
  try {
    const newProduct = new Product({
      ...req.body,
      createdAt: new Date()
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      product: savedProduct
    });
  } catch (error) {
    console.error('Failed to add product:', error);
    res.status(500).json({ message: 'Failed to add product' });
  }
});

router.put('/:id', authMiddleware, AdminOnly, SanitizeProductData, ValidateProductData, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: new Date()
      },
      { new: true }
    );

    if (updatedProduct) {
      res.json({
        success: true,
        message: 'Product updated successfully',
        product: updatedProduct
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Failed to update product:', error);
    res.status(500).json({ message: 'Failed to update product' });
  }
});

router.delete('/:id', authMiddleware, AdminOnly, async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (deletedProduct) {
      res.json({
        success: true,
        message: 'Product deleted successfully'
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Failed to delete product:', error);
    res.status(500).json({ message: 'Failed to delete product' });
  }
});

module.exports = router;
