//const postControllers = require('../controllers/post');
//destructured using to aboud repeatation 


const {createPost, getPosts}=require('../controllers/post');

const express = require('express');

const validator = require('../validators')

const router =express.Router();

router.get('/',getPosts);
router.post('/post',validator.createPostValidator,createPost);

module.exports=router;
// exports.getPosts = (req, res) => {
    
// }


//exporting directly 
// exports.getPosts = (req, res) => {
//     res.send('<h1>Welcome to Node js Server</h1>')
// }


//exporting below function using modules 

// const getPosts = (req, res) => {
//     res.send('<h1>Welcome to Node js Server</h1>')
// }
// module.exports = {
//     getPosts
// }