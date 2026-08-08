import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
import { Blacklist } from '../models/blacklistModel.js';

export const addUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            age,
            gender,
            email,
            password,
            contactNo,
            travelDate,
            termsAccepted
        } = req.body;

        if (!firstName || !lastName || !age || !gender || !email || !password || !contactNo || !travelDate) {
            return res.json({ "status": "ERROR", "message": "All fields are required" });
        }

        if (!termsAccepted) {
            return res.json({ "status": "ERROR", "message": "You must accept the terms and conditions" });
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res.json({ "status": "ERROR", "message": "Email already registered" });
        }

        const lastUser = await User.findOne().sort({ userId: -1 });
        const userId = lastUser ? lastUser.userId + 1 : 1;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userId,
            firstName,
            lastName,
            age,
            gender,
            email,
            password: hashedPassword,
            contactNo,
            travelDate,
            termsAccepted
        });
        await newUser.save();

        const token = jwt.sign({ userId: newUser.userId }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({
            "status": "User Added",
            "token": token,
            "user": {
                userId: newUser.userId,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email
            }
        });
    } catch (error) {
        res.json({ "status": "ERROR", "message": error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.json({ "status": "ERROR", "message": "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ "status": "ERROR", "message": "Invalid email or password" });

        const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({
            "status": "Login Success",
            "token": token,
            "user": {
                userId: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        res.json({ "status": "ERROR", "message": error.message });
    }
};

export const logoutUser = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.json({ "status": "ERROR", "message": "No token provided." });
        }

        const token = authHeader.split(" ")[1];

        await Blacklist.create({ token });
        res.json({ "status": "Logout Success", "message": "Token has been invalidated." });
    } catch (error) {
        res.json({ "status": "ERROR", "message": error.message });
    }
};

export const getProfile = async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.userId }).select("-password");
        if (!user) return res.json({ "status": "ERROR", "message": "User not found" });

        res.json({ "status": "Success", "profile": user });
    } catch (error) {
        res.json({ "status": "ERROR", "message": error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const uid = parseInt(req.params.userId);
        const { firstName, lastName, age, gender, email, contactNo, travelDate } = req.body;

        const updated = await User.findOneAndUpdate(
            { userId: uid },
            { firstName, lastName, age, gender, email, contactNo, travelDate },
            { new: true, runValidators: true }
        ).select("-password");

        if (!updated) return res.json({ "status": "ERROR", "message": "User not found" });

        res.json({ "status": "User Updated", "user": updated });
    } catch (error) {
        res.json({ "status": "ERROR", "message": error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const uid = parseInt(req.params.userId);

        const deleted = await User.findOneAndDelete({ userId: uid });
        if (!deleted) return res.json({ "status": "ERROR", "message": "User not found" });

        res.json({
            "status": "User Deleted",
            "user": { userId: deleted.userId, firstName: deleted.firstName, lastName: deleted.lastName, email: deleted.email }
        });
    } catch (error) {
        res.json({ "status": "ERROR", "message": error.message });
    }
};