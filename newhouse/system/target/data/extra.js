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


// 数据添加
/**
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件
 */
async function add(colName1,query){
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

// 数据删除
/**
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件
 */
async function remove(colName1,query){
    try{
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作
        let data = await col.deleteMany(query) ;
        console.log(data,"2200")
        let result = '' ;
        if(data.deletedCount){
            console.log('删除成功') ;
            result = {
                type:1 ,
                msg: '删除成功'
            }
        }else{
            console.log('删除失败') ;
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

/* 数据更新 */
/**
 * @param {string} colName1 集合名称
 * @param {object} data_id  查询条件
 * @param {object} num      配置条件
 */
async function change(colName1,{username},{password}){
    try{ console.log(username,password,"111")
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作
        let data = await col.updateOne({username},{$set:{password}}) ;
        console.log('进来') ;
        let result = '' ;
        if(data.modifiedCount){ 
            console.log('成功进入')
            result = {
                type:1 ,
                msg: '更新成功'
            }
        }else{
            console.log('失败进入')
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


// 数据的查询接口
/**
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件
 * @param {object} target  配置条件
 */
async function find(colName1,query = {username, password},target = {num, page, sort}){   

    try{
        // 1 连接数据库
        let { db, client } = await connect() ; //调用connct方法可以得到一个promise对象，await 是可以获取resolve 返回的结果
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3. 对集合进行转化为数组
        // 解构
        let { num, page, sort } =  target ;
        let data 
        let btn = 0
        if(num){
            let index = (page - 1)*num 
            let o = {skip:index,limit:num,sort} 
            btn = Math.ceil((await col.find({}).toArray()).length/(o.limit)) ;
            
            data = await col.find({}) 
             //跳过的条数
            if(o.skip){
                data=await data.skip(o.skip) 
            }
            //限制的条数
            if(o.limit){
                data=await data.limit(o.limit*1).toArray();
            } 

        }else{
            data = await col.find(query).toArray();
            
        }
        
        // 4.关闭数据库
        client.close() ;
        // 返回数据
        return {data,btn} ;

    }catch(err){
        console.log(err)
    }
}


module.exports = {
    find,change ,add
}
