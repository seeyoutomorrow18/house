// 引入express模块
const express = require('express') ;

const Router = express.Router() ;

// 使用中间件使得请求体的类型转化
Router.use(express.json(),express.urlencoded({extended:false}))

// //CORS解决跨域
// Router.use((req, res, next) => {
//     let AllowOrigin = ['http://localhost:8080', 'http://localhost:8081','http://localhost:3000']
//     let Origin = req.get('Origin')
//     if (AllowOrigin.includes(Origin)) {
//         res.set({
//             'Access-Control-Allow-Origin': Origin,
//             'Access-Control-Allow-Methods': 'GET,POST,PATCH,PUT,DELETE,OPTION',
//             'Access-Control-Allow-HEADERS': 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With'
//         })
//     }
//     // 跨域请求CORS中的预请求
//     // console.log(req.method);
    
//     if(req.method=="OPTIONS") {
//         res.sendStatus(200);/*让options请求快速返回*/
//     } else{
//         next();
//     }
// })

//把这个路由配置放在所有路由的前面，方便调用next操作
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") { //特殊请求：发送了请求头的那些请求
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})

// 引入子路由
const goodsRouter = require('./goods') ;
const usersRouter = require('./users') ;
/* const optionRouter = require('./option') ; */
/* 测试 */
/* console.log("进入router index") */

// 路由设置
Router.use('/goods',goodsRouter) ;
Router.use('/users',usersRouter) ;
/* Router.use('/option',optionRouter) ; */
// 导出模块
module.exports = Router ;