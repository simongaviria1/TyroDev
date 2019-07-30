const Hapi = require('@hapi/hapi')
const Path = require('path')

const init = async () => {
	// const server = Hapi.server({
	// 	port: 3001,
	// 	host: 'localhost'
	// });

	const server = Hapi.server({
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'public')
			}
		}
	})

	await server.register(require('@hapi/inert'));

	server.route({
		method: 'GET',
		path: '/homepage',
		handler: (request, h) => {
			return 'hello'
		}
	})

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return h.file('../.././frontend/public/index.html')
		}
	});


	server.route({
		method: 'POST',
		path: '/',
		handler: (request, reply) => {
			const payload = request.payload
			console.log(payload)

			return payload
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
