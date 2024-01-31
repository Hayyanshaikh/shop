const Category = require('../models/category');

const categoryController = {
  AllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  AddCategory: async (req, res) => {
    const { name } = req.body;
    try {
      const newCategory = new Category({ name });
      const savedCategory = await newCategory.save();
      res.json(savedCategory);
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = categoryController;
