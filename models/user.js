const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Veuillez fournir un e-mail'],
  },
  password: {
    type: String,
    required: [true, 'Veuillez fournir un mot de passe'],
  },
});

userSchema.statics.findAndValidate = async function (username, password) {
  const findUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, findUser.password);
  return isValid ? findUser : false;
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model('User', userSchema);
