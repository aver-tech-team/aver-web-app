const signupRouter = require('express').Router()
const User = require('../models/user.js')
const bcrypt = require('bcrypt')

signupRouter.get('/', async (request, response, next) => {
    const users = await User.find({})
    response.json(users)
  })
  
signupRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        name: body.name,
        email: body.email,
        passwordHash,
    })
    //TODO: Allow saving the user to mongoDB
    //const savedUser = await user.save()

    response.json(user)
    })

module.exports = signupRouter