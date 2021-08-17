function log(request,response,next){
    console.log("url: "+request.url,"metodo:"+request.method);
    next();
}

module.exports = log;