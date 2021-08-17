const jwt = require('../lib/jwt');

function auth(request,response,next){
    try{
    const {authorization:token} = request.headers;
    const decodeToken = jwt.verify(token);
    if(!isValidToken) throw new Error("Not Authorized");
    console.log('data',decodeToken);
    next();
    }catch(error){
        response.status(401);
        response.json({
            succes: false,
            message: "Not Authorized",
            error: error.message
        });
    }
}

module.exports = auth