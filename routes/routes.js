const express = require('express');
const mongoose = require('mongoose');
const Interests = require('../models/interests');
const IDS = require('../models/ids');

const router = express.Router()

router.get('/', async(req, res) => {

    res.status(200).json({ name: 'Kwabena Ampah' })

})

router.post('/nia/ids', async(req, res) => {

    const nia_identification_card_info = req.body;



    const nationalId = nia_identification_card_info.person.nationalId


    let data_ = {}
    data_.nationalId = nationalId.replaceAll('-', '');
    data_.details = nia_identification_card_info;

    let info = new IDS(data_);

    try {

        IDS.findOne({ nationalId: nationalId }, async(err, data) => {
            if (err) {
                console.log(err);
                res.status(404).json({ code: '233', message: error.message })
            } else {
                console.log(data);
                if (data != null) {
                    res.status(200).json({ code: '000', message: "Data Already exist" })
                } else {
                    const dataSaved = await info.save();
                    res.status(404).json({ code: '000', message: "Data saved successfully" })
                }


            }
        });

    } catch (error) {
        res.status(500).json({ code: '500', message: error.message })
    }



})


router.get('/nia/ids/:id', async(req, res) => {

    const id = req.params.id;

    try {

        // Query a data on the basis of name
        IDS.findOne({ nationalId: id }, async(err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: error.message })
            } else {
                console.log(data);
                res.status(200).json(data)
            }
        });

    } catch (error) {
        res.status(400).json({ message: error.message })
    }



})


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