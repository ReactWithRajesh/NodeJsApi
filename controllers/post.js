//import model
const Post = require('../models/post')

// returning sample data 

// exports.getPosts = (req, res) => {
//     // res.send('<h1>Welcome to Node js Server</h1>')
//     //need to json return as response 
//     res.json({
//         posts: [{ title: 'ReactJs' }, { title: 'Redux' }, { title: 'Javascript' }, { title: 'node' }]
//     })
// }

exports.getPosts = (req, res) => {
    const posts = Post.find().select(' title body')
        .then((posts) => {
            // res.status(200).json({ posts: posts })

            //by default status is 200 if ok so no need to send status back 
            // if key and values is same then we can send back as it is res.json({ posts: posts })
            res.json({ posts })
        })
        .catch(err => console.log(`Errors : ${err}`))
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    //console.log(req.body)
    // const options = { wtimeout: 90000 }; //timeout set for process 

    post.save().then(result => {
        res.json({
            post: result
        });
    })

    // commented because error handled in cntroller only 

    // .catch(err => {
    //     res.status(400).json({
    //         error: err.message // Use err.message to get the error message
    //     });
    // });

}