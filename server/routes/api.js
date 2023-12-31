const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const CategoryController = require('../controllers/categoryController');

// API routes related to users
router.get('/users', UserController.getAllUsers);
// API routes related to Categoires
router.get('/categories', CategoryController.AllCategories);
router.post('/addCategory', CategoryController.AddCategory);

module.exports = router;