if(process.env.NODE_ENV==='production'){
module.exports={
  mongoURI:'mongodb://<dbuser>:<dbpassword>@ds235708.mlab.com:35708/library'
};
}else{
  module.exports={
    mongoURI:'mongodb://localhost:27017/Library'
  };
}

