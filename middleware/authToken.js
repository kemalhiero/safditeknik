// require('dotenv').config
// const jwt = require('jsonwebtoken');

// function isAdmin(req,res,next) {

    const token = req.cookies.token

//     if(token){

    jwt.verify(token, process.env.TOKEN, (err, decodedToken) =>{
        if(err){
            console.log(err.message)
            res.send("500")
        }else{
            // console.log(decodedToken);
            const role = decodedToken.role
            if(role != 'admin') return res.send(err)
            next()
        }
    })
} else{
    res.send("Error")
    }
}

// function isTeknisi(req,res,next) {

    const token = req.cookies.token

//     if(token){

    jwt.verify(token, process.env.TOKEN, (err, decodedToken) =>{
        if(err){
            console.log(err.message)
            res.send("500")
        }else{
            // console.log(decodedToken);
            const role = decodedToken.role
            if(role != 'teknisi') return res.send(err)
            next()
        }
    })
} else{
    res.send("500")
    }
}

// const checkUser = (req,res,next) =>{
//     const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.TOKEN, async (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            res.locals.user = null
            next()
          } else {
            res.locals.user = decodedToken
            res.locals.email = decodedToken.email
            res.locals.nama = decodedToken.nama
            res.locals.role = decodedToken.role
            next();
          }
        });
    }else{
        res.locals.user = null
        res.locals.nama = ''
        res.locals.role = ''
        next()
    }
}


// module.exports = { isAdmin, isTeknisi , checkUser }