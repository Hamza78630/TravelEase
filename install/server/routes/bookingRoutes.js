import express from 'express';
import { addBooking, getMyBookings, cancelBooking, getAllBookings } from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add', protect, addBooking);
router.get('/mine', protect, getMyBookings);
router.patch('/cancel/:bookingId', protect, cancelBooking);
router.get('/all', getAllBookings);

export default router;