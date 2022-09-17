const { application } = require('express');
var express = require('express');
var router = express.Router();
const {dbName,dbUrl,mongodb,MongoClient} = require('../dbConfig');
const {LoanRequest,resolutionRequest,mongoose} = require('../dbSchema')

mongoose.connect(dbUrl)

/* GET users listing. */

router.get('/request',async(req,res)=>{
  try {
      let users = await LoanRequest.find()
      res.send({
        statusCode:200,
        data:users
      })
  } catch (error) {
    console.log(error)
    res.send({statusCode:500,message:"Internal Server Error",error})
  }
})

router.post('/request',async(req,res)=>{
  try {
    let users = await LoanRequest.create(req.body)
    res.send({
      statusCode:200,
      data:users
    })
    
  } catch (error) {
    console.log(error)
    res.send({statusCode:500,message:"Internal Server Error",error})
  }
})

router.put('/request/:id',async(req,res)=>{
  try {
    let users = await LoanRequest.find({_id:mongodb.ObjectId(req.params.id)})
    console.log(users)
    users[0].name = req.body.name
    users[0].email = req.body.email
    users[0].mobile = req.body.mobile
    users[0].amount = req.body.amount
    users[0].purpose = req.body.purpose
    await users[0].save()
   // let users = await LoanRequest.updateOne({_id:mongodb.ObjectId(req.params.id)},req.body)
    res.send({
      statusCode:200,
      message:"Data Saved Succesfully"
    })
  } catch (error) {
    console.log(error)
    res.send({statusCode:500,message:"Internal Server Error",error})
  }
})

router.delete('/request/:id',async(req,res)=>{
  try {
    let users = await LoanRequest.deleteOne({_id:mongodb.ObjectId(req.params.id)})
    res.send({
      statusCode:200,
      message:"Data Deleted Succesfully"
    })
  } catch (error) {
    console.log(error)
    res.send({statusCode:500,message:"Internal Server Error",error})
  }
})


router.get('/resolution',async(req,res)=>{
  try {
      let users = await resolutionRequest.find()
      res.send({
        statusCode:200,
        data:users
      })
  } catch (error) {
    console.log(error)
    res.send({statusCode:500,message:"Internal Server Error",error})
  }
})

router.post('/resolution',async(req,res)=>{
  try {
    console.log(req.body)
    let users = await resolutionRequest.create(req.body)
    res.send({
      statusCode:200,
      data:users
    })
    
  } catch (error) {
    console.log(error)
    res.send({statusCode:500,message:"Internal Server Error",error})
  }
})

module.exports = router;
