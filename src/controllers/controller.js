const axios = require('axios');

const API_KEY = '5645f2c2357fa821b6431b6deb811887';

const Weather = require('../model/Weather');

exports.getWeather = (req, res) => {
	res.render('about');
};

exports.renderHomePage = (req, res) => {
	res.render('index');
};

exports.getWeather = (req, res) => {
	const city = req.body.city;
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

	const weather = new Weather(req.body.city);
	weather.validateUserInput();

	if (weather.errors.length) {
		res.render('index', {
			error: weather.errors.toString(),
		});
	} else {
		axios
			.get(url)
			.then((response) => {
				const { temp: temperature } = response.data.main;
				const { name: location } = response.data;
				res.render('index', {
					weather: `It is currently ${temperature} in ${location}.`,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}
};

exports.renderAboutPage = (req, res) => {
	res.render('about');
};

// named exports and are part of setting up logic
