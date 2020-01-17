// 连接mongo实现一个接口
//  MongoClient作为官方的默认连接类
const  {MongoClient} = require('mongodb') ;
const { DBurl,DBname } = require('../../config.json') ;

// 连接mongodb数据库
// client连接成功的客户端
//  MongoClient作为官方的默认连接类
function connect(){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(DBurl,(err,client)=>{
            // err 连接信息 client连接成功的客户端
            if(err) reject(err) ;
            let db = client.db(DBname) ;
            resolve({db,client})
        });
    })
}


// 数据的查询接口
/**
 * @传入参数 min~max 范围  ;  num 每页的条数  ;  page  页码
 * 
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件  
 * @param {object} target  配置条件
 */
async function get(colName1,query ){   
    try{
        let {min,max,page,num,dim} = query
        let index = (page-1)*num
        let target = Number(dim)
        // 1 连接数据库
        let { db, client } = await connect() ; //调用connct方法可以得到一个promise对象，await 是可以获取resolve 返回的结果
        // 2 连接集合
        let col = db.collection(colName1) ;
    
        let data
        if(min && max && page && num){
            data = await col.find({HaAveragePrice:{$gt:Number(min),$lt:Number(max)}}).skip(Number(index)).limit(Number(num)).toArray()
        }else if(page && num && dim) {
            data = await col.find({R_HouseTypeName:new RegExp(target)}).skip(Number(index)).limit(Number(num)).toArray() 
        }
        
        // 4.关闭数据库
        client.close() ;
        // 返回数据
        return data ;

    }catch(err){
        console.log(err)
    }
}

// 数据的查询接口
/**
 * @传入参数 GoodsCode 相当于id
 * 
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件  
 * 
 */
async function look(colName1,query ){   
    try{
       console.log(query,"jinlia进来进来")
        // 1 连接数据库
        let { db, client } = await connect() ; //调用connct方法可以得到一个promise对象，await 是可以获取resolve 返回的结果
        // 2 连接集合
        let col = db.collection(colName1) ;
    
        let data = await col.find(query).toArray()
        console.log(data,"data44444444")
        /* let data = await col.find(query).toArray(); */
        // 4.关闭数据库
        client.close() ;
        // 返回数据
        return data ;

    }catch(err){
        console.log(err)
    }
}

module.exports = {
    get ,look
}