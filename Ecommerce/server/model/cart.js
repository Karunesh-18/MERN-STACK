const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true
  },
  quantity: { type: Number, required: true, min: 1, default: 1 },
  addedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);
