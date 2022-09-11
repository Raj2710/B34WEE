var express = require('express');
var router = express.Router();

/* GET users listing. */
var data = [
  {
    name:"Nagarajan",
    email:"nag@gmail.com",
    status:"Approved"
  },
  {
    name:"Vimal",
    email:"vimal@gmail.com",
    status:"Pending"
  },
  {
    name:"Lily",
    email:"lily@gmail.com",
    status:"Declined"
  }
]
router.get('/', (req, res)=> {
  res.send(data)
});

router.get('/:id',(req,res)=>{
  if(req.params.id<data.length)
  {
      res.send({
          statusCode:200,
          data:data[req.params.id]
      })
  }
  else
  {
      res.send({
          statusCode:400,
          message:'Requested Index not found'
      })
  }
})

router.post('/add-user',(req,res)=>{
  data.push(req.body)
    res.send({
        statusCode:200,
        message:"Response Saved"
    })
})

router.put('/:id',(req,res)=>{
  if(req.params.id<data.length)
  {
     data[req.params.id].name = req.body.name
     data[req.params.id].email = req.body.email
     data[req.params.id].status =req.body.status

     res.send({
      statusCode:200,
      message:"Response Saved"
  })

  }
  else
  {
      res.send({
          statusCode:400,
          message:'Requested Index not found'
      })
  }
})

router.put('/change-password/:id',(req,res)=>{
  if(req.params.id<data.length)
  {
      if(data[req.params.id].password===req.body.old_pwd)
      {
          data[req.params.id].password = req.body.new_pwd
          res.send({
              statusCode:200,
              message:"Password Changed Successfully"
          })
      }
      else
      {
          res.send({
              statusCode:401,
              message:"Invalid current password"
          })
      }
  }
  else
  {
      res.send({
          statusCode:400,
          message:'Requested Index not found'
      })
  }
})

router.delete('/:id',(req,res)=>{
  if(req.params.id<data.length)
  {
     data.splice(req.params.id,1)
     res.send({
       statusCode:200,
       message:'Data Deleted Successfully'
     })
  }
  else
  {
      res.send({
          statusCode:400,
          message:'Requested Index not found'
      })
  }
})

module.exports = router;
