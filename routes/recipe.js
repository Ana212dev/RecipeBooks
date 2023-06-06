const express = require('express')
const router = express.Router()
const { ensureAuth} = require('../middleware/auth')

const Recipe = require('../models/Recipe')
// @ description Show the add recipes page
// @ route GET /recipe/add 
router.get('/add', ensureAuth, (req,res) => {
    res.render('recipe/add')
})

//@ description Process add from 
//@ route POST/recipes 
router.post('/', ensureAuth, async (req,res) => {
    try {
        req.body.user = req.user.id
        await Recipe.create(req.body)
        res.redirect('/dashboard')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})


module.exports = router