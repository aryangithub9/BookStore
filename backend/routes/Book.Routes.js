import express from 'express';
import {createBook, updateBook, deleteBook, allbooks} from '../controller/Book.Controller.js';

const router = express.Router();

// Route to get all books
router.get('/', allbooks);
// Route to create a new book
router.post('/', createBook);

// Route to update a book
router.put('/:id', updateBook);

// Route to delete a book
router.delete('/:id', deleteBook);

export default router;
