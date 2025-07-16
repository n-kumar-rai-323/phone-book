const errorHandling =(error, req,res,next)=>{
console.log(error)

let code = error.code || 500;
let detail= error.detail || error.details || null
let status = error.status || "ERR_APP_SERVER_ERR"
let message = error.message || "Internal Server error..."
   res.status(code).json({
        error:detail,
        message:message,
        status: error
    })
}

module.exports = errorHandling