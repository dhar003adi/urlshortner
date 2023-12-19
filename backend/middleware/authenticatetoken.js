const jwt = require('jsonwebtoken')
const SECRET_KEY = "yowaimohehehe"
const authenticateuser = async(req,res,next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer','')
        if(!token) {
            return res.status(401).json({messgae:"Authentication required"})
        }

        const decoded = jwt.verify(token,SECRET_KEY)
        req.user = decoded
        console.log('Token verified successfully:', decoded);
        next()
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({message:"authentication failed"})
    }
}

module.exports = authenticateuser