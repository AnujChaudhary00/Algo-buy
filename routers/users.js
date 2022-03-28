
const {User} = require('../models/users');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/signup', async (req,res)=>{

    console.log(req.body)
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordhash: bcrypt.hashSync(req.body.password, 10),
        contactno: req.body.contactno,
    })
    user = await user.save();

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
})

router.post('/login', async (req,res) => {
    console.log(req.body)
    const user = await User.findOne({email: req.body.email})
    const secret = process.env.secret;
    if(!user) {
        return res.status(400).send('The user not found');
    }

    
    if(user && bcrypt.compareSync(req.body.password, user.passwordhash)) {
        const token = jwt.sign(
            {
                userid: user.id,
                isadmin: user.isadmin
            },
            secret,
            {expiresIn : '1d'} 
        )
       
        res.status(200).send({user: user.email , token: token}) 
    } else {
       res.status(400).send('password is wrong!');
    }

    
})

module.exports =router;