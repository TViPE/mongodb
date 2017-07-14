var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:/db_02');

var userSchema = mongoose.Schema({
	name: String,
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	admin: Boolean,
	location: String,
	meta: {
		age: Number,
		website: String
	},
	created_at: Date,
	updated_at: Date
});

userSchema.methods.dudify = function() {
	this.name = this.name + '-dude';

	return this.name;
}

userSchema.pre('save', function(next){
	var currentDate = new Date();
	this.updated_at = currentDate;

	if(!this.created_at){
		this.created_at = currentDate;
	}

	next();
});

// Create a model using it
var User = mongoose.model('user', userSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

//------------ CREAT ------------ //
// var chris = new User ({
// 	name: 'Chris',
// 	username: 'new_selilayha',
// 	password: 'new_password'
// });

// chris.dudify(function (err, name){
// 	if(err) throw err;
// 	console.log('Your name is ' + name);
// });

// chris.save(function(err){
// 	if(err) throw err;
// 	console.log('User save succefully');
// })

// var newUser = User({
// 	name: 'Peter Quill',
// 	username: 'starlord55',
// 	password: 'password',
// 	admin: true
// });

// newUser.save(function(err){
// 	if(err) {
// 		console.log(err);
// 	}
// 	console.log('User created!');
// })

//------------ Read ------------ //

// User.find({username: 'starlord55'}, function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// })

// User.findById(1, function(err, data) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(data);
// })

//------------ Querying ------------ //

// var monthAgo = new Date();
// monthAgo.setMonth(monthAgo.getMonth() -1);

// User.find({admin: true}).where('create_at').gt(monthAgo).exec(function (err, users){
// 	if (err) throw err;
// 	console.log(users);
// });
