class AuthContoller {
    registerUser = (req, res, next) => {
        let result = req.body;
        let image = req.file
    
        res.json({
            data: {result, image},
            message: "Register Successfylly",
            status: "REGISTER SUCCESS",
            options: null
        })
    }
}

const authCtrl = new AuthContoller()
module.exports = authCtrl