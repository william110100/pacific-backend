const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/', async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const order = await newOrder.save();
        if (!order) throw Error('Something went wrong while saving order');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
});

router.get('/:orderId', async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.orderId });
        if (!order) console.log('Order not found');

        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

router.patch('/:orderId', async (req, res) => {
    try {
        const order = await Order.findOneAndReplace({ orderId: req.params.orderId }, req.body);
        if (!order) throw Error('Something went wrong while updating order');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.delete('/:orderId', async (req, res) => {
    try {
        const order = await Order.findOneAndDelete({ orderId: req.params.orderId });
        if (!order) throw Error('Order not found');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

module.exports = router;