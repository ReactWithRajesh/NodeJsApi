exports.getPosts = (req, res) => {
    // res.send('<h1>Welcome to Node js Server</h1>')

    //need to json return as response 
    res.json({
        posts: [{ title: 'ReactJs' }, { title: 'Redux' }, { title: 'Javascript' }, { title: 'node' }]
    })
}