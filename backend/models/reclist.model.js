const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reclistSchema = new Schema({
	listkey: String,
	musiclist: []
});
 
 const Reclist = mongoose.model('Reclist', reclistSchema);
 
 module.exports = Reclist; 