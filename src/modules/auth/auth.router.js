const authRoute = require("express").Router()
const validateData = require("../../middlewares/validator.middleware");
const authCtrl = require("./auth.controller")
const Joi = require("joi")



const RegisterDTO = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    phone: Joi.string().allow(null, "").optional().default(null),
    email: Joi.string().email().required(),
    address: Joi.string().allow(null, "").optional().default(null),
    country: Joi.string().allow(null, "").default(null),
    company: Joi.string().min(5).max(100).required(),
    jobTitle: Joi.string().min(2).max(100).required(),
    notes: Joi.string().min(2).max(500).allow(null, ""),
    contactType: Joi.string().valid('personal', 'work', 'family', 'friend', 'other').default('other'),
    birthday: Joi.date().iso().required(),
    socialMedia: Joi.object({
        facebook: Joi.string().uri().allow(null, ""),
        twitter: Joi.string().uri().allow(null, ""),
        linkedin: Joi.string().uri().allow(null, ""),
        instagram: Joi.string().uri().allow(null, ""),
    }).default({}),
});

authRoute.post("/register", validateData(RegisterDTO), authCtrl.registerUser)
module.exports = authRoute