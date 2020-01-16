// 引入自由路
const express = require('express') ;

// 路由设置
const Router = express.Router() ;

// 导入文件
const {find,remove,add,change} = require('../data/mongo') ; 
const {get ,look} = require('../data/weblist')
// mongoDB数据库的集合名
const colName1 = 'list';

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



module.exports = Router ; 