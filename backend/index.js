const express = require('express')
const passport = require('passport')
const {ExtractJwt, JwtStrategy} = require('passport-jwt')
const app = express()

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'shwetabh'
passport.use(
    new JwtStrategy(opts, function(jwt_payload, done){
        User.findOne({_id: jwt_payload.identifier}, function(err, user){
            if(err){
                done(err, false)
            }
            if(user){
                done(null, user)
            }
            else{
                done(null, false)
            }
        })
    }
    )
)

app.listen(3000)