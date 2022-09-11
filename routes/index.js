var express = require('express');
var router = express.Router();
const {dbName,dbUrl,mongodb,MongoClient} = require('../dbConfig');

var client = new MongoClient(dbUrl);

/* GET home page. */
router.get('/', async (req, res,)=> {
  await client.connect()
  try {
    const db = await client.db(dbName)
    let users = await db.collection('users').find().toArray()
    res.send({
      statusCode:200,
      users
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal server error"
    })
  }
  finally{
    client.close()
  }
});

router.get('/:id', async (req, res,)=> {
  await client.connect()
  try {
    const db = await client.db(dbName)
    let users = await db.collection('users').findOne({_id:mongodb.ObjectId(req.params.id)})
    res.send({
      statusCode:200,
      users
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal server error"
    })
  }
  finally{
    client.close()
  }
});


router.post('/',async (req,res)=>{
  await client.connect();
  try {
    const db = await client.db(dbName);
    let users = await db.collection('users').insertOne(req.body)

    res.send({
      statusCode:200,
      message:"User created Successfully!",
      users
    })
  } catch (error) {
      console.log(error)
      res.send({
        statusCode:500,
        message:"Internal server error"
      })
  }
  finally{
    client.close()
  }
})

router.put('/:id', async (req, res,)=> {
  await client.connect()
  try {
    const db = await client.db(dbName)
    let users = await db.collection('users').updateOne({_id:mongodb.ObjectId(req.params.id)},{
      $set:{
        name:req.body.name,
        email:req.body.email,
        status:req.body.status
      }
    })
    res.send({
      statusCode:200,
      message:"Data Saved Successfully!",
      users
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal server error"
    })
  }
  finally{
    client.close()
  }
});

router.delete('/:id', async (req, res,)=> {
  await client.connect()
  try {
    const db = await client.db(dbName)
    let users = await db.collection('users').deleteOne({_id:mongodb.ObjectId(req.params.id)})
    res.send({
      statusCode:200,
      message:"User Deleted Successfullly",
      users
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal server error"
    })
  }
  finally{
    client.close()
  }
});

module.exports = router;
