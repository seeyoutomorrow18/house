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
async function seek(colName1,query ){   
    try{
        // 1 连接数据库
        let { db, client } = await connect() ; //调用connct方法可以得到一个promise对象，await 是可以获取resolve 返回的结果
        // 2 连接集合
        let col = db.collection(colName1) ;
    
        let data = await col.find(query).toArray()
        
        // 4.关闭数据库
        client.close() ;
        // 返回数据
        return data ;

    }catch(err){
        console.log(err)
    }
}

// 数据删除
/**
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件
 */
async function omit(colName1,query){
    try{
        var target = []
        for(var key in query){
            target.push(query[key])
        }
      
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作  /* Model.remove({ _id: { $in: ['aID', 'bID'] } }); */
        let data = await col.deleteMany({ GoodsCode: { $in: target } }) ;
        let result = '' ;
        
        if(data.deletedCount){

            result = {
                type:1 ,
                msg: '删除成功'
            }
        }else{

            result = {
                type: 0 ,
                msg: '删除失败'
            }
        }
        // 4 关闭数据库
        return result ;
    }catch(err){
        console.log(err)
    }
}

// 数据添加
/**
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件
 */
async function fortify(colName1,query){
    try{
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作 
        let data = await col.insertMany([query]) ;
        let result = '' ;
        if(data.insertedCount){
            result = {
                type:1 ,
                msg: '添加成功'
            }
        }else{
            result = {
                type: 0 ,
                msg: '添加失败'
            }
        }
        // 4 关闭数据库
        return result ;
    }catch(err){
        console.log(err)
    }
}

// 数据更改 
/**
 * @param {string} colName1     集合名称
 * @param {object} data_id  查询条件
 * @param {object} num      配置条件
 */
async function amend(colName1,{GoodsCode},{status},){
    try{ 
       
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作
        let data = await col.updateOne({GoodsCode},{$set:{status}}) ;
       /*  console.log(data,'96') ; */
        let result = '' ;
        if(data.modifiedCount){
            result = {
                type:1 ,
                msg: '更新成功'
            }
        }else{
            result = {
                type: 0 ,
                msg: '更新失败'
            }
        }
        // 4 关闭数据库
        return result ;
    }catch(err){
        console.log(err)
    }
}

///////////////
// 数据更改 
/**
 * @param {string} colName1     集合名称
 * @param {object} data_id  查询条件
 * @param {object} num      配置条件
 */
async function amendall(colName1,query){
    try{ 
        console.log(query,'8888')
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作
        query.forEach(async element => {
            let data = await col.updateOne({GoodsCode:element},{$set:{status:'1'}}) ;
            console.log(data)
        });
        


            

       /*  let result = '' ;
        if(data.modifiedCount){
            result = {
                type:1 ,
                msg: '更新成功'
            }
        }else{
            result = {
                type: 0 ,
                msg: '更新失败'
            }
        }
        // 4 关闭数据库
        return result ; */
    }catch(err){
        console.log(err)
    }
}


// 数据更改 
/**
 * @param {string} colName1     集合名称
 * @param {object} data_id  查询条件
 * @param {object} num      配置条件
 */
async function amendall1(colName1,query){
    try{ 
    
        console.log(query,'8888')
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作
        query.forEach(async element => {
            let data = await col.updateOne({GoodsCode:element},{$set:{status:'0'}}) ;
            console.log(data)
        });
        


            

       /*  let result = '' ;
        if(data.modifiedCount){
            result = {
                type:1 ,
                msg: '更新成功'
            }
        }else{
            result = {
                type: 0 ,
                msg: '更新失败'
            }
        }
        // 4 关闭数据库
        return result ; */
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    seek,omit,fortify,amend,amendall,amendall1
}