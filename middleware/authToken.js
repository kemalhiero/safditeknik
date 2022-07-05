require('dotenv').config
const jwt = require('jsonwebtoken');

function isAdmin(req,res,next) {

    const token = req.cookies.jwt

    if(token){

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) =>{
        if(err){
            console.log(err.message)
            res.render('500')
        }else{
            // console.log(decodedToken);
            const role = decodedToken.role
            if(role != 'admin') return res.render('500')
            next()
        }
    })
} else{
    res.render('500')
    }
}

function isTeknisi(req,res,next) {

    const token = req.cookies.jwt

    if(token){

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) =>{
        if(err){
            console.log(err.message)
            res.render('500')
        }else{
            // console.log(decodedToken);
            const role = decodedToken.role
            if(role != 'teknisi') return res.render('500')
            next()
        }
    })
} else{
    res.render('500')
    }
}

const checkUser = (req,res,next) =>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            res.locals.user = null
            next()
          } else {
            res.locals.user = decodedToken
            res.locals.email = decodedToken.email
            res.locals.nama = decodedToken.nama
            res.locals.type = decodedToken.type
            next();
          }
        });
    }else{
        res.locals.user = null
        res.locals.nama = ''
        res.locals.type = ''
        next()
    }
}


module.exports = { isAdmin, isTeknisi , checkUser }