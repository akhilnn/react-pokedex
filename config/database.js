const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

// Update template literal
db.on('connected', function() {
	console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});