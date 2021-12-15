require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, /* { expiresIn: '45s' } */);
}

function authenticateToken(req, res, next) {
    if (req.body.token) {
        const token = req.body.token.split(' ')[1];

        if (token == null) return res.status(401).json({ code: "14", message: ""});
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, currentUser) => {
            //console.log(err);
            if (err) return res.status(403).json({ code: "13", message: "Token invalid" });
            req.currentUser = currentUser;
            next();
        });
    }
    
}

module.exports = { generateAccessToken, authenticateToken };
