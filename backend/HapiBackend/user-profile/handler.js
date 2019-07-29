'use strict'

const Handler = {
    profile: {
        auth: {
            strategy: ['session', 'basic']
        },
        handler: (request, reply) => {
            reply.view('profile')
        }
    }
}

module.exports = Handler