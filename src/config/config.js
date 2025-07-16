require("dotenv").config()
const MongodbConfig={
    url: process.env.MONGODB_URL,
    name:process.env.MONGODB_NAME,
}

module.exports={MongodbConfig}