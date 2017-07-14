var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kitty');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
	console.log('connected database');
	var kittySchema = mongoose.Schema({
		name: String
	});

	var Kitten = mongoose.model('Kitten', kittySchema);
	var silence = new Kitten({
		name: 'Silence'
	});
	silence.save(function(err, data) {
		if (err) {
			console.log(err);
		}
		console.log(data);
	})
	console.log(silence.name);

	var hello = new Kitten({
		name: 'Hello'
	});
	hello.save(function(err,data){
		if(err) {
			console.log(err);
		}
		console.log(data);
	})
});

