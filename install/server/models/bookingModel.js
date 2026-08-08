import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    bookingId: { type: Number, required: true, unique: true },
    userId: { type: Number, required: true }, 
    bookingType: { type: String, required: true, enum: ['Package', 'Destination'] },
    title: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    duration: { type: String },         
    inclusions: [{ type: String }],     
    travelDate: { type: Date, required: true },
    travelers: { type: Number, required: true, default: 1 },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Confirmed' }
}, {
    timestamps: true,
    collection: 'bookings'
});

export const Booking = mongoose.model('Booking', bookingSchema);