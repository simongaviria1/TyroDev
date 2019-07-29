const Hapi = require('@hapi/hapi')
// const users = require('.././routes/users')
const db = require("../db/queries");

const init = async () => {
	const server = Hapi.server({
		port: 3001,
		host: 'localhost'
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'Hello World!'
		}
	});

	server.route({
		method: 'GET',
		path: '/account/{username}',
		handler: (request, h) => {
			var accountMoch = {};
			if (request.params.username === 'simon') {
				accountMoch = {
					'username': 'simon',
					'password': '12345678'
				}
			}
			return accountMoch;
		}
	})

	server.route({
		method: 'POST',
		path: '/users/login',
		handler: (request, response) => {
			console.log(response)
			return {};
		}
	})

	server.route({
		method: "GET",
		path: '/users/getLoggedInUser',
		handler: (request, response) => {
			console.log(true)
			console.log(db.getUser)
			return db.getUser();
		}
	})

	await server.start();
	console.log(`Server running on %s`, server.info.uri);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init(); 
