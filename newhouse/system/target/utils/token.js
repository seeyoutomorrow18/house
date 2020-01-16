const jwt = require('jsonwebtoken')
const secretKey = 'xiaopeng'

/** 
* 
* @param {object} data  加密的数据
* @param { number | string } expiresIn 有效期
* @return {string}      返回的token 
*/
function create(data,expiresIn= 60 * 60 * 3000){
    var token = jwt.sign(data,secretKey,{ expiresIn })
    console.log(token,"加密")
    return token
}

function verify(token){
    let result
    try{
        var decoded = jwt.verify(token,secretKey)
        console.log(decoded,"verify 解密")
        result = true
    }catch{
        result = false
    }
    
    return result
}


module.exports = { create ,verify }