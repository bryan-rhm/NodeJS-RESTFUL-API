var mongoose = require("mongoose");
var Schema = mongoose.Schema;
/*Change this value for the route of your mongodb database*/
mongoose.connect("mongodb://localhost/");
var user_schema = new Schema ({
	nombre:{type:String,required:"El nombre es obligatorio"},
	apellido:{type:String,required:"El apellido es obligatorio"},
});

var User = mongoose.model("User",user_schema);

module.exports.User = User;