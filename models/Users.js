const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    fullName : String,
    email : String,
    password : String
});

// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);