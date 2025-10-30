const express = require('express');
const router = express.Router();

router.get('/home', (req, res) =>{
    res.render('home');
})

// provide a root-level login path that redirects to the user router
router.get('/login', (req, res) => {
    res.redirect('/user/login');
});




module.exports = router;