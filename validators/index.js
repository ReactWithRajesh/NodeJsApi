exports.createPostValidator = (req, res, next) => {
    //validation for titile 
    req.check('title', 'Write a title.').notEmpty();
    req.check('title', 'Title must be between 4to 100 characters.').isLength({
        min: 4, max: 150
    });
    //validation for body 
    req.check('body', 'Write a body.').notEmpty();
    req.check('body', 'Body must be between 4to 1000 characters.').isLength({
        min: 4, max: 150
    });

    //check for errors 
    const errors = req.validationErrors()
    //if error show the first one as they happen 
    if (errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({ erros: firstError })
    }
    //proceed to next midlware 
    next()
}