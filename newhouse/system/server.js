// 引入第三方模块
const express = require('express') ;      

// 引入路由
const allRouter = require('./target/router') ;              
const { PORT } = require('./config.json') ;                        
// 调用方法生成对象   
const app = express() ;    

// 以当前目录作为根目录
app.use(express.static('./')) ;  

// 使用allRouter中间件，实现路由的效果
app.use(allRouter) ;           

// 开启静态资源服务器
app.listen(PORT,()=>{   
    console.log(` 开启服务 ${PORT} `) ;   
})