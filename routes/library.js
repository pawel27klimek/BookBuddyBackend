const express = require('express');
const {
  createBook,
  getBooks,
  getBook,
  deleteBook,
} = require('../controllers/bookController');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
} = require('../controllers/userController');

const router = express.Router();

// GET all books
router.get('/books', getBooks);

// GET a single book
router.get('/books/:id', getBook);

// POST a new book
router.post('/books', createBook);

// DELETE a book
router.post('/books/:id', deleteBook);

// UPDATE a new book
// router.post('/:id', updateBook);

// GET all users
router.get('/users', getUsers);

// GET a single user
router.get('/users/:email', getUser);

// POST a new user
router.post('/users', createUser);

// PATCH a user
router.post('/users/:email', updateUser);

module.exports = router;
