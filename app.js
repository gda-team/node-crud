const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const routes = require('./routes/contact.routes');

const app = express();

app.use(express.urlencoded({ extended: true }));

// Use ejs engine

app.set('view engine', 'ejs');

//bootstrap include
app.use(
	'/css',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
);

app.use(express.static(path.join(__dirname, 'public')));

// dotenv.config();

app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`app listening on Port http://localhost:${PORT}`)
);
