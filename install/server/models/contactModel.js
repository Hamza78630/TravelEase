import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    enquiryType: {
        type: String,
        required: true,
        enum: ['Booking Help', 'Package Info', 'Cancellation/Refund', 'Feedback', 'Other']
    },
    subject: { type: String, required: true },
    message: { type: String, required: true }
}, {
    timestamps: true,
    collection: 'contacts'
});

export const Contact = mongoose.model('Contact', contactSchema);