//import model
const Post = require('../models/post')

exports.getPosts = (req, res) => {
    // res.send('<h1>Welcome to Node js Server</h1>')
    //need to json return as response 
    res.json({
        posts: [{ title: 'ReactJs' }, { title: 'Redux' }, { title: 'Javascript' }, { title: 'node' }]
    })
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    console.log(req.body)
    const options = { wtimeout: 90000 };
    post.save(options)
        .then(result => {
            res.status(200).json({
                post: result
            });
        })
        .catch(err => {
            res.status(400).json({
                error: err.message // Use err.message to get the error message
            });
        });

}