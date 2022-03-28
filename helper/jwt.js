const expressJwt = require('express-jwt');
require('dotenv/config');
function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
       
    }).unless({
        path: [
            { url: /\/algo-buy\/products(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/algo-buy\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
            `${api}/users/login`,
            `${api}/users/signup`
        ] 
    })
}

module.exports = authJwt