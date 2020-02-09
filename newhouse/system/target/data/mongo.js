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
            console.log(2)
            result = {
                type:1 ,
                msg: '添加成功'
            }
        }else{
            console.log(3);
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

// // 数据的查询接口
// async function find({data_id},{num},{page},{skip}){
//     try{
//         // 1 连接数据库
//         let { db, client } = await connect() ; //调用connct方法可以得到一个promise对象，await 是可以获取resolve 返回的结果
//         // 2 连接集合
//         let col = db.collection('list') ;
//         // 3. 对集合进行转化为数组
//         let data = await col.find(query).toArray() ;
//         // 4.关闭数据库
//         client.close() ;
//         // 返回数据
//         return data ;

//     }catch(err){
//         console.log(err)
//     }
// }
// 测试查找数据接口
/* find( { id: 1 } ) */

// 数据的查询接口
/**
 * @param {string} colName1 集合名称
 * @param {object} query   查询条件
 * @param {object} target  配置条件
 */
async function find(colName1,query = {},target = {skip,limit,sort}){   
    
    try{
        // 1 连接数据库
        let { db, client } = await connect() ; //调用connct方法可以得到一个promise对象，await 是可以获取resolve 返回的结果
        // 2 连接集合
        let col = db.collection(colName1) ;
        let { skip, limit, sort } =  target ;
        let data 
        if(limit == undefined){
            data = await col.find(query).toArray()
        }else{
            console.log('有Num数值')
            data = await col.find(query)
            // 排序
            if(sort ==  1){
                data=await data.sort({data_id: 1 }) ;
            } else if(sort == -1){
                data=await data.sort({data_id: -1 }) ;
            }
            //跳过的条数
            if(skip){
                data=await data.skip(skip) 
            }
            //限制的条数
            if(limit){
                data=await data.limit(limit*1).toArray();
            }
        }
        
        // 4.关闭数据库
        client.close() ;
        // 返回数据
        return data ;

    }catch(err){
        console.log(err)
    }
}

/* 数据更新 */
/**
 * @param {string} colName1     集合名称
 * @param {object} data_id  查询条件
 * @param {object} num      配置条件
 */
async function change(colName1,{data_id},{num},){
    try{ 
        console.log(data_id,num,'[[[[')
       
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作
        let data = await col.updateOne({data_id},{$set:{num}}) ;
        console.log(data,'96') ;
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


/* 数据字段的改变 */
async function checked(colName1,{data_id},{select},){
    try{ 
        console.log(data_id,select)
       
        // 1 连接数据库
        let { db , client } = await connect() ;
        // 2 连接集合
        let col = db.collection(colName1) ;
        // 3 对集合进行操作
        let data = await col.updateOne({data_id},{$set:{select}}) ;
        //console.log(data)
        // let {modifiedCount} = data
        // console.log(modifiedCount)
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


module.exports = {
    find,remove,add,change,checked
}
