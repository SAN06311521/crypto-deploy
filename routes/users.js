const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req, res) => {
    try {
        const users = await User.find()
        console.log(users);
        res.json(users)
    } catch (err) {
        console.log(err);
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user)
    } catch (err) {
        console.log(err);
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        cryptoCoin: req.body.cryptoCoin,
        price: req.body.price,
        criticalValuePrice: req.body.criticalValuePrice,
        percentage: req.body.percentage,
        criticalValuePercent: req.body.criticalValuePercent
    })

    try{
        const a1 = await user.save()
        res.json(a1)
    } catch(err){
        console.log(err);
        res.send('Error')
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        user.email = req.body.email
        const a1 = await user.save()
        res.json(a1)
    }catch(err){
        console.log(err);
        res.send('Error')
    }
})



module.exports = router