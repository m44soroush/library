if(process.env.NODE_ENV==='production'){
module.exports={
  mongoURI:'mongodb://m44soroush:33748160ab@ds235708.mlab.com:35708/library'
};
}else{
  module.exports={
    mongoURI:'mongodb://localhost:27017/Library'
  };
}

