import jwt from 'jsonwebtoken'

const verifyJWT = (req , res , next) => {
  const token = req.cookies.sessionId
  const decoded = jwt.verify(token, process.env.JWT_KEY);

  
  if(decoded){
     
     req.user = decoded
      next()
    
  }
  if(!decoded){
    res.clearCookie('sessionId')
    res.json({status : 404 , message : 'Hacker hai hacker'})
  };
}

export default verifyJWT