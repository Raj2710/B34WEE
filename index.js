const express = require('express');
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var data = [
    {
        name: 'Nagarajan',
        email: 'nag@gmail.com',
        mobile: '123123123',
        password: 'Admin@123'
    },
    {
        name: 'Sachin',
        email: 'sachin@gmail.com',
        mobile: '123123123',
        password: 'Admin@123'
    },
    {
        name: 'Arun',
        email: 'arun@gmail.com',
        mobile: '123123123',
        password: 'Admin@123'
    }
]

app.get('/',(req,res)=>{
    res.send({
        statusCode:200,
        data
    })
})

app.get('/:id',(req,res)=>{
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

app.post('/',(req,res)=>{
    data.push(req.body)
    res.send({
        statusCode:200,
        message:"Response Saved"
    })
})

app.put('/:id',(req,res)=>{
    if(req.params.id<data.length)
    {
       data[req.params.id].name = req.body.name
       data[req.params.id].email = req.body.email
       data[req.params.id].mobile =req.body.mobile

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

app.put('/change-password/:id',(req,res)=>{
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

app.delete('/:id',(req,res)=>{
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
app.listen(process.env.PORT || 8000,()=>console.log('Server is listening'+(process.env.PORT?process.env.PORT:8000)))