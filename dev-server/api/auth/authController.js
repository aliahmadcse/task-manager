import StringUtil from '../../utilities/stringUtil';
import User from '../../model/userModel';

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
            return res.status(200).json();
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
