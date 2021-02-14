const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    const newUser = new User(req.body);

    try {
        const user = await newUser.save();
        if (!user) throw Error('Something went wrong while saving user');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.userId });
        if (!user) console.log('User not found');

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

router.patch('/:userId', async (req, res) => {
    try {
        const user = await User.findOneAndReplace({ userId: req.params.userId }, req.body);
        if (!user) throw Error('Something went wrong while updating user');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ userId: req.params.userId });
        if (!user) throw Error('User not found');

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

module.exports = router;