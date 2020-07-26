import StringUtil from '../../utilities/stringUtil';
import User from '../../model/userModel';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }
    const user = new User({
        userName: req.body.userName.toLowerCase(),
        password: req.body.password
    });
    user.save(error => {
        if (error) {
            if (error.code === 11000) {
                return res
                    .status(403)
                    .json({ message: 'Username is already taken' });
            }
            return res.status(500).json();
        }
        return res.status(201).json();
    });
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
