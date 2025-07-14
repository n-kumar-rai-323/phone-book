class AuthContoller {
    registerUser = (req, res, next) => {
        let result = req.body;

        res.json({
            data: result,
            message: "Register Successfylly",
            status: "REGISTER SUCCESS",
            options: null
        })
    }
}

const authCtrl = new AuthContoller()
module.exports=authCtrl