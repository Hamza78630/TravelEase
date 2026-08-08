import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNo: { type: String, required: true },
    travelDate: { type: Date, required: true },
    termsAccepted: { type: Boolean, required: true }
}, {
    timestamps: true,
    collection: 'users'
});

export const User = mongoose.model('User', userSchema);