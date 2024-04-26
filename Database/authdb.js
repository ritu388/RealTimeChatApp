const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserLogin = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Number: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },

});

UserLogin.pre('save', function (next) {
	const user = this;

	bcrypt.genSalt(10, function (err, salt) {
		if (err) { return next(err); }

		bcrypt.hash(user.password, salt, null, function (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	})
});

UserLogin.methods.comparePassword = function (candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) { 
			return callback(err); }
		callback(null, isMatch);
	});
}

const ModelClass = mongoose.model('SignUp', UserLogin);

module.exports = ModelClass;