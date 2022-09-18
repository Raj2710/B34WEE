var express = require('express');
var router = express.Router();
const {hashPassword,hashCompare} = require('../auth')
const {mongodb,dbName,dbUrl,MongoClient} = require('../dbConfig')

const client = new mongodb.MongoClient(dbUrl);

router.post('/signup',async(req,res)=>{
  await client.connect()
  try {
      const db = await client.db(dbName);
      let user = await db.collection('users').findOne({email:req.body.email})
      if(user)
      {
        res.send({
          statusCode:200,
          message:"User Already Exists"
        })
      }
      else
      {
        let hasshedPassword = await hashPassword(req.body.password)
        req.body.password = hasshedPassword
        let user = await db.collection('users').insertOne(req.body)
        res.send({
          statusCode:200,
          message:"User Added Successfully"
        })
      }
  } catch (error) {
      console.log(error)
      res.send({
        statusCode:500,
        message:"Internal Server Error",
        error
      })
  }
  finally
  {
    client.close()
  }
})

router.post('/signin',async(req,res)=>{
  await client.connect()
  try {
      const db = await client.db(dbName);
      let user = await db.collection('users').findOne({email:req.body.email})
      if(user)
      {
          const compare = hashCompare(req.body.password,user.password)
          if(compare)
          {
            res.send({
              statusCode:200,
              message:"Sign In Successfull"
            })
          }
          else
          {
            res.send({
              statusCode:400,
              message:"Password Does not Match"
            })
          }
      }
        else
      {
        res.send({
          statusCode:400,
          message:"User Does Not Exists"
        })
      }
  } catch (error) {
      console.log(error)
      res.send({
        statusCode:500,
        message:"Internal Server Error",
        error
      })
  }
  finally
  {
    client.close()
  }
})

router.post('/change-password/:id',async(req,res)=>{
  await client.connect()
  try {
      const db = await client.db(dbName);
      let user = await db.collection('users').findOne({_id:mongodb.ObjectId(req.params.id)})
      if(user)
      {
          const compare = hashCompare(req.body.old_password,user.password)
          if(compare)
          {
            let hasshedPassword = await hashPassword(req.body.new_password)
            let pwd_update = await db.collection('users').updateOne(
              {_id:mongodb.ObjectId(req.params.id)},
              {$set:{password:hasshedPassword}})

            res.send({
              statusCode:200,
              message:"Password Update Successfull"
            })
          }
          else
          {
            res.send({
              statusCode:400,
              message:"Current Password is Wrong"
            })
          }
      }
        else
      {
        res.send({
          statusCode:400,
          message:"User Does Not Exists"
        })
      }
  } catch (error) {
      console.log(error)
      res.send({
        statusCode:500,
        message:"Internal Server Error",
        error
      })
  }
  finally
  {
    client.close()
  }
})

module.exports = router;
