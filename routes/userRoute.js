const express = require('express');
const User = require('../models/userModel');


const router = express.Router();

router.post('/signin', async (req, res) => {
    const signinUser = await user.findOne({
        email:req.body.email,
        password:req.body.password
    });
    if(signinUser){
        res.send({
            _id: signedinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            telephone: signinUser.telephone,
            isAdmin: signinUser.isAdmin,
            token: signinUser.getToken(user)

        })
        
    }else{
        res.status(401).send({msg:'Invalid Email or Password'})
    }
})
 router.get('/createadmin', async (req, res) => {
try{
    const user = new User({
        name: "Cheche",
        email: "nawe@gmail.com",
        telephone: 672730866,
        password:"nawe1234",
        isAdmin: true
    });
    const newUser = await user.save();
             res.send(newUser);
}catch (error){
    res.send({msg:error.message})
         }    

 });

 module.exports = router;