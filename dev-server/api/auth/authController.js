import StringUtil from '../../utilities/stringUtil';
import User from '../../model/userModel';
import { generateJWT } from '../../services/authService';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }
    User.findOne(
        { userName: req.body.userName.toLowerCase() },
        (error, user) => {
            if (error) {
                return res.status(500).json();
            }
            if (!user) {
                return res.status(401).json();
            }
            const passwordMatch = User.passwordMatches(
                req.body.password,
                user.password
            );
            if (!passwordMatch) {
                return res.status(401).json();
            }
            const token = generateJWT(user);
            return res.status(200).json({ token: token });
        }
    );
}

function validateIndex(body) {
    let errors = '';
    if (StringUtil.isEmpty(body.userName)) {
        errors += 'UserName is required. ';
    }
    if (StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }
    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    };
}
