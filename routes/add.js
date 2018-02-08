var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	data.friends.push({
		"description" : req.query.description, "name" : req.query.name, "imageURL" : "http://lorempixel.com/400/400/people"
	})
	res.render('index', data)
 }