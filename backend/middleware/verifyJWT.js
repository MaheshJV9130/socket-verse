import jwt from 'jsonwebtoken'

const verifyJWT = (req , res , next) => {
  const token = req.cookies.sessionId
  jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
  if(decoded){
      res.json(decoded.username)
      next()
    
  }
  if(!decoded){
    res.clearCookie('sessionId')
    res.json({status : 404 , message : 'Hacker hai hacker'})
  }
});
}

export default verifyJWT