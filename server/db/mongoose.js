const mongoose=require("mongoose");
const dbConfig=require('./db.config');

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.mongoURI);

module.exports=mongoose;
