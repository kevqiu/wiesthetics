// In your routes configuration file
const path = require('path');

module.exports = [
	{
		path: '/',
		component: path.resolve(`src/pages/Home.jsx`)
	},
	{
		path: '/new-booking',
		component: path.resolve(`src/pages/NewBooking.jsx`)
	},
	{
		path: '/page-2/',
		component: path.resolve(`src/pages/Page2.js`)
	},
	{
		path: '/404/',
		component: path.resolve(`src/pages/404.js`)
	},
];