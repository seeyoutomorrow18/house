// 引入自由路
const express = require('express') ;

// 路由设置
const Router = express.Router() ;

// 导入文件
const {find,remove,add,change} = require('../data/mongo') ; 
const {get ,look} = require('../data/weblist')  
const {seek ,omit ,fortify ,amend ,amendall ,amendall1} = require('../data/carlist')
// mongoDB数据库的集合名
const colName1 = 'list';
const colName2 = 'cartlist';
// 测试路由
// Router.get('/',(req,res)=>{
//     console.log('goods路由') ;
//     res.send('你好！！！')
// });

/* 
        商品的管理：
            * 查询
            * 添加
            * 删除
            * 修改
*/
/* Router.get('/jsonp',async(req,res)=>{
    let sql=`select * from lb`
    let {callback}=req.query;
    let result=await check(sql)
    res.send(`${callback}(${JSON.stringify(result)})`)
}) */



/*
* 不传参查询全部商品
* 只传data_id 查询一条数据
* 传 num, page, sort (num表示每个多少条数据，page表示页码，sort表示排序 +_ 1 )
**/
Router.get('/',async(req,res)=>{
    let data
    let { data_id , num, page, sort } = req.query ;
    let index = (page - 1)*num ;
    if(data_id == undefined ){
        data = await find(colName1,{},{skip:index,limit:num,sort});
    }else{
        data = await find(colName1,{data_id},{skip:index,limit:num,sort});
    }
    
    res.send(data);
}) 

/* 删除全部数据 传参就删除一条，不传参删除全部 */
Router.delete('/',async(req,res)=>{
    console.log(req.body) ;
    let data = await remove(colName1,req.body) ;
    res.send(data)
})

/* 添加数据 */
Router.post('/',async(req,res)=>{
    let data = await add(colName1,req.body);
    res.send(data)
    
})

/* 更新数据 */
Router.put('/',async(req,res)=>{
    let {data_id,num} = req.body ;
    let data = await change(colName1,{data_id},{num}) ;
    res.send(data) ;

})

////////////////////////////////////////////////////////////////////////

/* 列表页接口 http://localhost:3000/goods/list */
Router.get('/list',async(req,res)=>{
    let data = await get(colName1,req.query);
    res.send(data);
}) 

/* 详情页接口 http://localhost:3000/goods/detail */
Router.get('/detail',async(req,res)=>{
    let data = await look(colName1,req.query);
    res.send(data);
}) 

/* 购物车查找 */

/* 查询购物车全部商品的接口: http://localhost:3000/goods/carlist */
Router.get('/carlist',async(req,res)=>{
    console.log(111)
    let data = await seek(colName2,req.query)
    res.send(data)
})

/* 删除数据 */
Router.delete('/carlist',async(req,res)=>{
    let data = await omit(colName2,req.body) ;
    res.send(data)
})

/* 数据的增加 */
Router.post('/carlist',async(req,res)=>{
    let data = await fortify(colName2,req.body) ;
    res.send(data)
})

/* 修改数据 */
Router.put('/carlist',async(req,res)=>{
    let { GoodsCode,status } = req.body
    let data = await amend(colName2,{ GoodsCode },{ status }) ;
    res.send(data)
})

/* 修改all数据 */
Router.put('/select',async(req,res)=>{
    //console.log(req.body,"jinlia后端")
    let data = await amendall(colName2,req.body) ;
    res.send(data)
})

Router.put('/select1',async(req,res)=>{
    //console.log(req.body,"jinlia后端")
    let data = await amendall1(colName2,req.body) ;
    res.send(data)
})

module.exports = Router ; 