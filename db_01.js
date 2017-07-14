var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_01')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
	console.log('Database connected');
	var studentSchema = mongoose.Schema({
		name: String
	})
	var Student = mongoose.model('student', studentSchema);
	var ti = new Student({
		name: 'Ti'
	}) 
	var teo = new Student({
		name: 'Teo'
	})
	ti.save(function (err, data){
		if(err){
			console.log(err);
		}
		console.log(data);
	});
	teo.save(function (err, data){
		if(err){
			console.log(err);
		}
		console.log(data);
	});
});