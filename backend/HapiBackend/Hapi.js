const Hapi = require('@hapi/hapi')

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
			console.log(h)
			return accountMoch;
		}
	})

	server.route({
		method: 'POST',
		path: '/account',
		handler: (request, response) => {
			console.log(response)
			return request.payload;
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
