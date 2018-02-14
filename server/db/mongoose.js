const mongoose=require("mongoose");
const dbConfig=require('./db.config');

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.mongoURI).
then(()=>console.log('Connected to database')).catch(e=>console.log(e));
module.exports=mongoose;
