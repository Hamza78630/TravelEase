import express from 'express';
import { addContact, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

router.post('/add', addContact);
router.get('/all', getAllContacts);

export default router;