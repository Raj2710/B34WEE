var express = require('express');
var router = express.Router();
const {mongodb,dbName,dbUrl} = require('../config/dbConfig')
const {mongoose,issueModel,issueTypeModel} = require('../config/dbScheema')

mongoose.connect(dbUrl)

router.get('/issue-types',async(req,res)=>{
  try {
    let issues_types = await issueTypeModel.find({},{'issue_type':1,'_id':0});
    let issueTypes=[];

    issues_types.map((e)=>{
      issueTypes.push(e.issue_type)
    })
    res.send({
      statusCode:200,
      issueTypes
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      error
    })
  }
})

router.post('/issue-types',async(req,res)=>{
  try {
    let issueType = await issueTypeModel.create(req.body)
    res.send({
      statusCode:200,
      message:"Issue Type Created Successfylly!"
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      erorr
    })
  }
})

router.put('/issue-types/:id',async(req,res)=>{
  try {
    let issueType = await issueTypeModel.findOne({_id:mongodb.ObjectId(req.params.id)})
    if(issueType)
    {
      issueType.issue_type=req.body.issue_type;
      await issueType.save()
      res.send({
        statusCode:200,
        message:"Issue Edited Successfylly!"
      })
    }
    else
    {
      res.send({
        statusCode:400,
        message:"Invalid Issue"
      })
    }
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      erorr
    })
  }
})

router.delete('/issue-types/:id',async(req,res)=>{
  try {
    let issueType = await issueTypeModel.deleteOne({_id:mongodb.ObjectId(req.params.id)})
      res.send({
        statusCode:200,
        message:"Issue Deleted Successfylly!"
      })
    }
   catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      erorr
    })
  }
})

router.get('/issues-count',async(req,res)=>{
  try {
    let open = await issueModel.find({status:"Open"}).count()
    let inProgrogres = await issueModel.find({status:"In-Progress"}).count()
    let clossed = await issueModel.find({status:"Clossed"}).count()

    res.send({
      statusCode:200,
      open,
      inProgrogres,
      clossed
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      error
    })
  }
})

router.get('/issues-by-status/:status',async(req,res)=>{
  try {
    let issues = await issueModel.find({status:`${req.params.status}`})
    res.send({
      statusCode:200,
      issues
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      error
    })
  }
})

router.get('/issues/:id',async(req,res)=>{
  try {
    let issue = await issueModel.find({_id:mongodb.ObjectId(req.params.id)})
    res.send({
      statusCode:200,
      issue
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      error
    })
  }
})


router.post('/issues',async(req,res)=>{
  try {
    let issue = await issueModel.create(req.body)
    res.send({
      statusCode:200,
      issue_id:issue._id,
      message:"Issue Submitted Successfully!"
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      error
    })
  }
})

router.put('/change-status/:id',async(req,res)=>{
  try {
    let issue = await issueModel.findOne({_id:mongodb.ObjectId(req.params.id)})
    switch (issue.status) {
      case 'Open':issue.status="In-Progress"
                  issue.inProgressDate=new Date()
                  break;
      case 'In-Progress':issue.status="Clossed"
                         issue.comments=req.body.comments
                         issue.closedDate=new Date()
                         break;
      default:
          res.send({
            statusCode:400,
            message:"Invalid Current Status"
          })
    }
    let result = await issue.save()
    res.send({
      statusCode:200,
      message:"Status Changed Successfully",
      result
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal Server Error",
      error
    })
  }
})


module.exports = router;
