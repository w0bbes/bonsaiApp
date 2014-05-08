// base setup

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var Bonsai = require('./app/models/bonsai');

mongoose.connect('mongodb://bonsai:bonsai2014@ds043329.mongolab.com:43329/bonsai')

app.use(bodyParser());


var port = process.env.PORT || 8888;

// routes


var router = express.Router();

// middleware

router.use(function(req,res,next){
	console.log('Iets...');
	next();
})

router.route('/bonsais')
	.post(function(req,res){
		var bonsai = new Bonsai();
		bonsai.name = req.body.name;

		bonsai.save(function(err){
			if(err)
				res.send(err);

			res.json({message: 'Bonsai aangemakt'});

		})

	})
	.get(function(req,res){
		Bonsai.find(function(err,bonsai){
			if(err)
				res.send(err)

			res.json(bonsai)
		})
	})



router.get('/',function(req, res){

	res.json({message: 'dikke test!'});

});

app.use('/api',router);

app.listen(port);
console.log('teh magic on ' + port);