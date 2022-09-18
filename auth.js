const bcrypt = require('bcryptjs')
const saltRounds = 10


let hashPassword = (password)=>{
    var salt = bcrypt.genSaltSync(saltRounds)
    var hash = bcrypt.hashSync(password,salt)
    return hash;
}

let hashCompare = (password,hash)=>{
    return bcrypt.compareSync(password,hash)
}
module.exports = {hashPassword,hashCompare}