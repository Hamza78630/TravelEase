import { Contact } from '../models/contactModel.js';

export const addContact = async (req, res) => {
    try {
        const { name, email, phone, enquiryType, subject, message } = req.body;

        if (!name || !email || !phone || !enquiryType || !subject || !message) {
            return res.json({ "status": "ERROR", "message": "All fields are required" });
        }

        const newContact = new Contact({ name, email, phone, enquiryType, subject, message });
        await newContact.save();

        res.json({ "status": "Success", "contact": newContact });
    } catch (error) {
        res.json({ "status": "ERROR", "message": error.message });
    }
};

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({ "status": "Success", "contacts": contacts });
    } catch (error) {
        res.json({ "status": "ERROR", "message": error.message });
    }
};