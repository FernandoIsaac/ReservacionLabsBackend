var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var AdminUserSchema = new mongoose.Schema({
  username : {type: String, unique: true, required: true},
  password : String,
  scope : [String]
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('AdminUser', UserSchema);
