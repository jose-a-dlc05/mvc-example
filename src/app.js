const express = require('express');

const app = express();

const router = require('./router');

// CONFIGURATION
// MIDDLEWARE
// this code is part of the configuration. Why is it essential or what is urlencoded?
app.use(express.urlencoded({ extended: false }));
// this function parses any incoming json requests
app.use(express.json());

// this tells express to gain access to everything inside public folder.
// Does not need to be manually declared.
app.use(express.static('public'));

// files rendered in browser
// a view engine is usually installed.
// tells express to look inside a specific directory
app.set('views', 'views');

app.set('view engine', 'hbs');

app.use('/', router);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
