const data = [];
const ConsumerModel = require('./consumer-model')

const save = (consumer) => {

    ConsumerModel.create(consumer)

    return consumer;
};

const findAll = async () => {
    const result = await ConsumerModel.findAll({raw: true})
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}


module.exports = {save, findAll, findById};