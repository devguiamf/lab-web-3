const Hapi = require("@hapi/hapi");
//const router = require("./router");
const routes = require('./config/routes');

const server = Hapi.server({
    port: 8000,
    host: "localhost"
});

const plugins = [
    {
        plugin: routes, options: {
            routesBaseDir: './api'
        }
    }
]
//router.forEach((path) => server.route(path));



module.exports = {server, plugins};