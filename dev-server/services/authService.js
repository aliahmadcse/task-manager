import jwt from 'jsonwebtoken';

export function generateJWT(user) {
    const tokenData = { userName: user.userName, id: user._id };
    return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}
