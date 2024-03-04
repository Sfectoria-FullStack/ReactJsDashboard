const { selectAllusers,  } = require('../controllers/users.controller')

const userRouter=require('express').Router()

userRouter.get('/',selectAllusers)


module.exports=userRouter