import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://traveleaseproject.netlify.app']
}));
app.use(express.json());

connectDB();

app.get("/test", (req, res) => {
    res.send("Server is alive!");
});

app.use("/users", userRoutes);
app.use("/contacts",contactRoutes);
app.use("/bookings", bookingRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});