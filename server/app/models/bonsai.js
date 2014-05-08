var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BonsaiSchema = new Schema({
	name: String
});

module.exports = mongoose.model('Bonsai',BonsaiSchema);