const express = require('express');
const User = require('../models/userModel');


const router = express.Router();


/*register in user*/
router.post("/register", async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        password: req.body.password
    });

    const newUser = await User.save();
    if(newUser){
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            telephone: newUser.telephone,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })

    } else {
        res.status(401).send({msg: "Invalid User Data"});
    }
})

router.post('/signin', async (req, res) => {
    const signinUser = await user.findOne({
        email:req.body.email,
        password:req.body.password
    });
    if(signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: signinUser.getToken(signinUser)

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