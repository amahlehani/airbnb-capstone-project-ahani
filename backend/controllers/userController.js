import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
  
        if (role && !['admin', 'host', 'user'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role specified' });
        }
  
        const userRole = role || 'user';
  
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }
  
        const newUser = new User({
            username,
            password,
            role: userRole, 
        });
  
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'User already exists' });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json("Invalid username");
        } 

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid password' });
        }


        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, username: user.username, role: user.role },
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};