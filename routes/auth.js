const express = require ('express')
const passport = require ('passport')
const router = express.Router()


//@description Authentiate with google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
    

//@description Google auth Callback
//@route GET /auth/google/callback
router.get(
    '/google/callback', 
    passport.authenticate('google', { failureRedirect:'/'}),
    (req,res) => {
    res.redirect('/dashboard')
    }
)
//@ description Logout User 
//@route /auth/logout
router.get('/logout', (req,res, next) =>{
    req.logout(function(err){
        if (err) {return next(err)}
        res.redirect ('/')
    })
})

module.exports = router