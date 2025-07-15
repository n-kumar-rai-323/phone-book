const validateData=(rules)=>{
    
    return async(req,res,next)=>{

        try{
            const data = req.body;
           if(!data){
            throw{
                code:422,
                message:"Data Not Found",
                status:"ERR_DATA_NOT_SET"
            }
           }
          await rules.validateAsync(data, {abortEarly:false})
          next()
        }catch(exception){
            
            let msgBag = {}
            if(exception.details){
                exception.details.map((error)=>{
                    msgBag[error.path.pop()]= error.message
                })
            }
         
            next({
                code: exception.code || 400,
                message:exception.message || "Validation Failed",
                status:exception.status || "ERROR",
                detail: msgBag
            })
        }
    }
}

module.exports=validateData