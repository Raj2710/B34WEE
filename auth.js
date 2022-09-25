const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = 'PlkmI908$3#HjLnadj*&*91bswkdkj'
const saltRounds = 10


let hashPassword = (password)=>{
    var salt = bcrypt.genSaltSync(saltRounds)
    var hash = bcrypt.hashSync(password,salt)
    return hash;
}

let hashCompare = (password,hash)=>{
    return bcrypt.compareSync(password,hash)
}

let createToken = async (email,firstName,role)=>{
    let token = await jwt.sign({
        email,
        firstName,
        role
    },secret,{expiresIn:'1m'})
    return token
}

let decodeToken = (token)=>{
    let data = jwt.decode(token)
    return data
}

let validity = async(req,res,next)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization.split(' ')[1];
        let data = await jwt.decode(token)
        if((Math.round(+new Date()/1000))<=data.exp)
        {
            next()
        }
        else
        {
            res.send({
                statusCode:401,
                message:"Token Expired"
            })
        }
    }
    else
    {
        res.send({
            statusCode:401,
            message:"Token Not Found"
        })
    }
}

let adminGaurd = async(req,res,next)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization.split(' ')[1];
        let data = await jwt.decode(token)
        if(data.role=='admin')
            next()
        else
            res.send({statusCode:401,message:"Only Admin is allowed to Access"})
    }
    else
    {
        res.send({
            statusCode:401,
            message:"Token Not Found"
        })
    }
}
module.exports = {hashPassword,hashCompare,createToken,decodeToken,validity,adminGaurd}