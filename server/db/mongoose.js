const mongoose=require("mongoose");
const dbConfig=require('./db.config');

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.mongoURI);
// mongoose.connect('mongodb://localhost:27017/Library');
module.exports=mongoose;
