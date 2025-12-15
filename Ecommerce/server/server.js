require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const connectDB = require('./config/db');
const authMiddleware = require('./middlewares/authMiddleware');

connectDB();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/profile', authMiddleware, async (req, res) => {
  const User = require('./model/user');
  const user = await User.findById(req.UserData.id).select('-password');
  res.status(200).json({ message: 'Profile', userData: user });
});

app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
