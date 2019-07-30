'use strict'

exports.plugin = {
    pkg: require('./package.json'),
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/test',
            handler: (request, h) => {
                const name = options.name;
                return `Hello ${name}`
            }
        })
    }
}