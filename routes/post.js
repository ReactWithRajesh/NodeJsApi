//exporting directly 
exports.getPosts = (req, res) => {
    res.send('<h1>Welcome to Node js Server</h1>')
}


//exporting below function using modules 

// const getPosts = (req, res) => {
//     res.send('<h1>Welcome to Node js Server</h1>')
// }
// module.exports = {
//     getPosts
// }