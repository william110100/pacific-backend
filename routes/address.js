const express = require('express');
const router = express.Router();
const Address = require('../models/address');

router.post('/', async (req, res) => {
    const newAddress = new Address(req.body);

    try {
        const address = await newAddress.save();
        if (!address) throw Error('Something went wrong while saving address');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get('/', async (req, res) => {
    const addresses = await Address.find();
    res.status(200).json(addresses);
});

router.get('/:addressId', async (req, res) => {
    try {
        const address = await Address.findOne({ addressId: req.params.addressId });
        if (!address) console.log('Address not found');

        res.status(200).json(address);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

router.patch('/:addressId', async (req, res) => {
    try {
        const address = await Address.findOneAndReplace({ addressId: req.params.addressId }, req.body);
        if (!address) throw Error('Something went wrong while updating address');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.delete('/:addressId', async (req, res) => {
    try {
        const address = await Address.findOneAndDelete({ addressId: req.params.addressId });
        if (!address) throw Error('Address not found');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

module.exports = router;