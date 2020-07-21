const path = require('path');

exports.createPages = async ({ actions }) => {
	const { createPage } = actions

	createPage({
		path: `/`,
		component: path.resolve(`./src/pages/Home.jsx`),
	});

	createPage({
		path: '/new-booking',
		component: path.resolve(`src/pages/NewBooking.jsx`)
	});

	createPage({
		path: '/page-2/',
		component: path.resolve(`src/pages/Page2.jsx`)
	});

	createPage({
		path: '/404/',
		component: path.resolve(`src/pages/404.jsx`)
	});
}
