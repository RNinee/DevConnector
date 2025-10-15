const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = 


// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth, async (req, res) => {
    try{
        const user = await 
    } catch(err){

    }
});

module.exports = router;