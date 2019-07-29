import { request } from "http";

server.auth.strategy('session', 'cookie', 'try', {
    redirectTo: '/login',
    password: 'some password', 
    appendNext: true, 
    isSecure: process.env.NODE_ENV === 'production', 
    // validateFunc: (request, session, callback) => //{...}
})

