import mongoose from 'mongoose';
import stringUtils from '../utilities/stringUtil';

const userSchema = new mongoose.Schema({
    userName: String,
    first: String,
    last: String,
    password: String
});

userSchema.set('timestamps', true);

// for getting the fullName
userSchema.virtual('fullName').get(function() {
    const first = stringUtils.capitalize(this.first.toLowerCase());
    const last = stringUtils.capitalize(this.last.toLowerCase());
    return `${first} ${last}`;
});

// runs before saving the document
userSchema.pre('save', function(next) {
    this.userName = this.userName.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    next();
});

export default mongoose.model('user', userSchema);
