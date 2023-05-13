const {find, create, getById} = require("./api/v1/consumer/consumer-controller");
const schema = require("./api/v1/consumer/consumer-schema");

const router = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello world";
        }
    },
    {
        method: "GET",
        path: "/consumers",
        handler: find
    },
    {
        method: "GET",
        path: "/consumers/{id}",
        options: {
            validate: schema.getConsumer,
            handler: getById
        }
    },
    {
        method: "POST",
        path: "/consumers",
        options: {
            validate: schema.postConsumer,
            handler: create
        }
    }
];

module.exports = router;