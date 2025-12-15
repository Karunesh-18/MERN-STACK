const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const RegisterUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        
        if (!email || !username || !password) {
            return res.status(400).json({ success: false, error: 'Email, username, and password are required' });
        }
        
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if(existingUser){
            return res.status(400).json({ success: false, error: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, username, password: hashedPassword });
        res.status(201).json({ success: true, message: 'User created successfully', user: { id: user._id, email, username, role: user.role } });

    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

const LoginUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        
        if ((!email && !username) || !password) {
            return res.status(400).json({ success: false, error: 'Email/username and password are required' });
        }
        
        const user = await User.findOne({ 
            $or: [{ email: email || null }, { username: username || null }]
        });
        
        if(!user || !(await bcrypt.compare(password, user.password))){ 
            return res.status(401).json({ success: false, error: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.SECRET_KEY, { expiresIn: '7d' });
        res.status(200).json({ 
            success: true,
            message: 'Login successful', 
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const CreateAdminUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        
        if (!email || !username || !password) {
            return res.status(400).json({ success: false, error: 'Email, username, and password are required' });
        }
        
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if(existingUser){
            return res.status(400).json({ success: false, error: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, username, password: hashedPassword, role: 'admin' });
        res.status(201).json({ success: true, message: 'Admin user created successfully', user: { id: user._id, email, username, role: user.role } });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

module.exports = { RegisterUser, LoginUser, CreateAdminUser };

