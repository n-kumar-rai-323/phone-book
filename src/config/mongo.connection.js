const mongoose = require("mongoose");
const { MongodbConfig } = require("./config");


(async () => {
  try {
    if (!MongodbConfig.url) throw new Error("MONGODB_URL is missing from environment!");

    await mongoose.connect(MongodbConfig.url, {
      dbName: MongodbConfig.name,
      autoCreate: true,
      autoIndex: true
    });

    console.log("*** MongoDB connected ***");
  } catch (err) {
    console.error("*** MongoDB connection error ***");
    console.error(err.message);
  }
})();
