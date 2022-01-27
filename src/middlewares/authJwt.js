import jwt from "jsonwebtoken";
import config from '../config';
import User from '../models/User'

export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    console.log(token);

    if (!token) return res.status(403).json({ message: 'No Token Provided' });

    const decoded = jwt.verify(token, config.SECRET)

    const user = await User.findById(decoded.id, { password: 0 })
    if (!user) return res.status(404).json({
        message: 'no user found'
    })

    next();
}

