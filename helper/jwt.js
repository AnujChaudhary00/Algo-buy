
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
            { url: /\/Algo-buy\/products/, methods: ['GET'] },
            { url: /\/Algo-buy\/categories/, methods: ['GET'] },
            { url: /\/Algo-buy\/users\/login/ ,methods:['POST']},
            { url: /\/Algo-buy\/users\/signup/, methods:['POST']}
        ] 
    })
}

module.exports = authJwt



