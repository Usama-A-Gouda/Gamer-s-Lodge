const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {

    res.render("./soul-purge/home")
});
router.get("/register",(req,res) => {
    res.render('./soul-purge/register');
})

module.exports = router;
