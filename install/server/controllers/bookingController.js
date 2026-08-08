import { Booking } from '../models/bookingModel.js';

export const addBooking = async (req, res) => {
    try {
        const {
            bookingType,
            title,
            location,
            price,
            image,
            duration,
            inclusions,
            travelDate,
            travelers
        } = req.body;

        if (!bookingType || !title || !location || !price || !travelDate) {
            return res.json({ status: "ERROR", message: "Missing required booking details" });
        }

        const lastBooking = await Booking.findOne().sort({ bookingId: -1 });
        const bookingId = lastBooking ? lastBooking.bookingId + 1 : 1;

        const newBooking = new Booking({
            bookingId,
            userId: req.userId,
            bookingType,
            title,
            location,
            price,
            image,
            duration,
            inclusions,
            travelDate,
            travelers: travelers || 1
        });

        await newBooking.save();

        res.json({ status: "Booking Confirmed", booking: newBooking });
    } catch (error) {
        res.json({ status: "ERROR", message: error.message });
    }
};

export const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.userId }).sort({ createdAt: -1 });
        res.json({ status: "Success", bookings });
    } catch (error) {
        res.json({ status: "ERROR", message: error.message });
    }
};

export const cancelBooking = async (req, res) => {
    try {
        const bid = parseInt(req.params.bookingId);

        const booking = await Booking.findOne({ bookingId: bid });
        if (!booking) return res.json({ status: "ERROR", message: "Booking not found" });

        if (booking.userId !== req.userId) {
            return res.json({ status: "ERROR", message: "You are not authorized to cancel this booking" });
        }

        booking.status = 'Cancelled';
        await booking.save();

        res.json({ status: "Booking Cancelled", booking });
    } catch (error) {
        res.json({ status: "ERROR", message: error.message });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json({ status: "Success", bookings });
    } catch (error) {
        res.json({ status: "ERROR", message: error.message });
    }
};