var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ComplementSchema = new Schema({
  message: {type: String}
});

module.exports = mongoose.model("compliments", ComplementSchema);