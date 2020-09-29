module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!'});
    }

    next();//if we have a req.user we should run the next function
};