import jwt from 'jsonwebtoken';

export function generateJWT(user) {
    const tokenData = { userName: user.userName, id: user._id };
    return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}

export function requireLogin(req, res, next) {
    const token = decodeToken(req);
    if (!token) {
        return res.status(401).json({ message: 'You have to be logged in' });
    }
    next();
}

export function decodeToken(req) {
    const token = req.headers.authorization || req.headers['authorization'];
    if (!token) {
        return null;
    }
    try {
        return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        return null;
    }
}

export function getUserName(req) {
    const token = decodeToken(req);
    if (!token) {
        return null;
    }
    return token.user.userName;
}

export function getUserId(req) {
    const token = decodeToken(req);
    if (!token) {
        return null;
    }
    return token.user.id;
}
