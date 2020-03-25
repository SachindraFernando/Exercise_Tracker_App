const router = require('express').Router();
let User = require('../models/user.model');
const mongoose = require('mongoose');

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: '+ err));
});
//router.route('/').get((req,res)=>{
 //   User.find()
   // .then(users=>res.send(users))
   // .catch(err=>res.status(400).send('Error: '+ err));
//});

// router.route('/hello').get((req,res)=>{
//    res.send('hello');
// });


/*router.route('/add').post((req,res)=>{
   const username = req.body.username;
   const newUser = new User({
       username:  username
       });
   newUser.save()
   .then(result => res.json({messgae:'added', data: result}))
   .catch(err=> res.status(400).send('Error:'+err));
});*/

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const newUser = new User({
        username
        });
    newUser.save()
    .then(() => res.json('user added'))
    .catch(err=> res.status(400).json('Error:'+err));
 });

//jp
/*router.post('/add',(req, res, next) =>  {
   const user = new User({
       username : req.body.username
   });
   user.save()
       .then(result => res.send('ok'))
       .catch(err => res.send(err.message));
});*/


module.exports = router;
