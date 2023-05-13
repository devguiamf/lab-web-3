const Joi = require("joi");

const postConsumer = {
    payload: Joi.object({
        id: Joi
            .number()
            .integer(),
        name: Joi
            .string()
            .min(3)
            .max(50)
            .required(),
        address: Joi.object({
            city: Joi
                    .string()
                    .required()
            }).required()
        }).required(),
        
};

const getConsumer = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    })
};

module.exports = {postConsumer, getConsumer};