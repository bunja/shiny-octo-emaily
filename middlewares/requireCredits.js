module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits!'});
    }

    next();//if we have a req.user we should run the next function
};