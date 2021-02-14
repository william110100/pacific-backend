const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const product = await newProduct.save();
        if (!product) throw Error('Something went wrong while saving product');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

router.get('/:productId', async (req, res) => {
    try {
        const product = await Product.findOne({ productId: req.params.productId });
        if (!product) console.log('Product not found');

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

router.patch('/:productId', async (req, res) => {
    try {
        const product = await Product.findOneAndReplace({ productId: req.params.productId }, req.body);
        if (!product) throw Error('Something went wrong while updating product');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.delete('/:productId', async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ productId: req.params.productId });
        if (!product) throw Error('Product not found');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

module.exports = router;