import { StringUtil } from '../../utilities/stringUtil';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.json({ message: validation.message });
    }

    return res.json();
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
