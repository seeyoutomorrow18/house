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


// 查询用户名的接口
/**
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件
 */
async function checkusername(colName1,query){   
    try{
        // 1 连接数据库
        let { db, client } = await connect() ; //调用connct方法可以得到一个promise对象，await 是可以获取resolve 返回的结果
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3. 查找用户名
        let data = await col.find(query).toArray();
          
        // 4.关闭数据库
        client.close() ;
        // 返回数据
        return data ;

    }catch(err){
        console.log(err)
    }
}

// 数据添加
/**
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件
 */
async function increase(colName1,query){
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

module.exports = {
    checkusername,increase 
}
