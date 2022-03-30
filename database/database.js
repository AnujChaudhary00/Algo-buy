require('dotenv/config');

const mongoose= require('mongoose');

function connect()

{

    return new Promise((resolve,reject)=>{

        mongoose.connect(process.env.CONNECTION_URL,{

            useNewUrlParser:true,   

            useUnifiedTopology:true,

            dbName:'algobuy'

        }).then((res,err)=>{

            if(err){ return reject(err)};

            resolve();

        })

    });

}

function close()

{

    return mongoose.disconnect();

}

module.exports={connect, close}
