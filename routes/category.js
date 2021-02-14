const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.post('/', async (req, res) => {
    const newCategory = new Category(req.body);

    try {
        const category = await newCategory.save();
        if (!category) throw Error('Something went wrong while saving category');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.status(200).json(categories);
});

router.get('/:categoryId', async (req, res) => {
    try {
        const category = await Category.findOne({ categoryId: req.params.categoryId });
        if (!category) console.log('Category not found');

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

router.patch('/:categoryId', async (req, res) => {
    try {
        const category = await Category.findOneAndReplace({ categoryId: req.params.categoryId }, req.body);
        if (!category) throw Error('Something went wrong while updating category');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.delete('/:categoryId', async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ categoryId: req.params.categoryId });
        if (!category) throw Error('Category not found');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

module.exports = router;