// 引入模块express
const  express = require('express') ;

// 路由设置
const Router = express.Router() ;

// 导入文件
const { remove } = require('../data/mongo') ;
const {find, change, add } = require('../data/extra') ;
const {checkusername ,increase } = require('../data/webuser') ;

const { token } = require('../utils')


// mongoDB数据库的集合名
const colName2 = 'users' ;

/* 
** 用户管理
        * 查询
        * 添加
        * 删除
        * 修改
*/

/* 添加用户 */
Router.post('/',async(req,res)=>{
    let data = await add(colName2,req.body)
    console.log(req.body)
    res.send(data)
})


/* 删除数据(不传值删除全部，传值删除对应的哪一项) */
Router.delete('/',async(req,res)=>{
    let data = await remove(colName2,req.body) ;
    res.send(data) ;
})


/* 查找用户 */
Router.get('/',async(req,res)=>{
    console.log(req.query,"///")
    let data
    let {username, password, num, page, sort } = req.query ;
    if(password){
         data = await find(colName2,{username, password},{num, page, sort}) ;
    }else{
         data = await find(colName2,{username},{num, page, sort}) 
    }
    res.send(data) ;
})

/* 更新用户名 */
Router.put('/',async(req,res)=>{
    let {username,password} = req.body ;
    let data = await change(colName2,{username},{password}) ;
    res.send(data) ;
})

//--------------------------------------------------

// 查找用户名
Router.get('/check',async(req,res)=>{
    /* console.log(req.query,"///") */
    let data
    let {username, password} = req.query ;
    if(password){
         data = await checkusername(colName2,{username, password}) ;
    }else{
         data = await checkusername(colName2,{username}) 
    }

    if(data.length>0){
        let Authorization = token.create({username})
        console.log(Authorization)
        console.log(1)
        res.send([{"Authorization":Authorization}])
    }else{
        res.send([]) ;
        console.log(2)
    }
    /* res.send(data) ; */
})

/* 添加用户 */
Router.post('/check',async(req,res)=>{
    let data = await increase(colName2,req.body)
    console.log(req.body)
    res.send(data)
})

// 暴露模块
module.exports = Router ;