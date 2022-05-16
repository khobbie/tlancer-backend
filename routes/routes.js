const express = require('express');
const Interests = require('../models/interests');

const router = express.Router()

router.post('/interests', async(req, res) => {


    const data = new Interests({
        interest: req.body.interest,
    })

    try {
        console.log(data)
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})

module.exports = router;