const express = require('express');
const router = express.Router();
const Detail = require('../models/order_detail');

router.post('/', async (req, res) => {
    const newDetail = new Detail(req.body);

    try {
        const detail = await newDetail.save();
        if (!detail) throw Error('Something went wrong while saving detail');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get('/', async (req, res) => {
    const details = await Detail.find();
    res.status(200).json(details);
});

router.get('/:detailId', async (req, res) => {
    try {
        const detail = await Detail.findOne({ detailId: req.params.detailId });
        if (!detail) console.log('Detail not found');

        res.status(200).json(detail);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

router.patch('/:detailId', async (req, res) => {
    try {
        const detail = await Detail.findOneAndReplace({ detailId: req.params.detailId }, req.body);
        if (!detail) throw Error('Something went wrong while updating detail');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.delete('/:detailId', async (req, res) => {
    try {
        const detail = await Detail.findOneAndDelete({ detailId: req.params.detailId });
        if (!detail) throw Error('Detail not found');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

module.exports = router;