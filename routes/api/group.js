const express = require('express');
const router = express.Router();

const Group = require('../../models/Group');

router.get(
    '/',
    async (req, res) => {
        try {
            const group = await Group.find();
            res.json(group);
        } catch(err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
    }
)

router.post(
    '/',
    async (req, res) => {
        try {
            const data = new Group({
                name: req.body.name,
                nfts: req.body.nfts
            });
            await data.save();
            const group = await Group.find();
            res.json(group);
        } catch(err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
    }
)

router.post(
    '/update/:id',
    async (req, res) => {
        try {
            await Group.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                nfts: req.body.nfts
            });
            const group = await Group.find();
            res.json(group);
        } catch(err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
    }
)

router.delete(
    '/:id',
    async (req, res) => {
        try{
            const data = await Group.findById(req.params.id);
            await data.remove();
            const group = await Group.find();
            res.json(group);
        } catch(err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
    }
)

module.exports = router;