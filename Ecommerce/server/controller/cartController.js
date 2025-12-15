const Cart = require("../model/cart");
const Product = require("../model/product");

const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.UserData.id }).populate("productId");

    if (!cartItems || cartItems.length === 0) {
      return res.status(200).json({ message: "Cart is empty", cart: [] });
    }

    res.status(200).json({ cart: cartItems });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart", message: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.UserData.id;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Check if product already exists in cart
    const existingCartItem = await Cart.findOne({ userId, productId });
    if (existingCartItem) {
      existingCartItem.quantity += quantity || 1;
      await existingCartItem.save();
      return res.status(200).json({ message: "Product quantity updated", cart: existingCartItem });
    }

    // Create new cart item with only productId reference
    const cartItem = await Cart.create({
      userId: userId,
      productId: productId,
      quantity: quantity || 1
    });

    res.status(201).json({ message: "Product added to cart", cart: cartItem });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ error: "Failed to add product to cart", message: error.message });
  }
};

module.exports = { getCart, addToCart };
