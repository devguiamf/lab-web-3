const consumerBusiness = require("./consumer-business");

const create = async(request, h) => {
    try {
        const payload = request.payload;
        const consumer = {
            name: payload.name,
            city: payload.address.city
        }

        const res = await toPayload(consumerBusiness.create(consumer))
        
        return h.response(res).code(201)
    } catch (error) {
        console.log(error);
        h.response(error.message).code(404)
    }
    return "created";
}

const toPayload = (consumerModel) => {
    console.log(typeof(consumerModel));
    console.log(consumerModel);
    if(consumerModel && Array.isArray(consumerModel)){
        let payload = []
        consumerModel.map((consumer) => {
            payload.push({
                id: consumer.id,
                name: consumer.name,
                address : {
                    city: consumer.city
                }
            })
        })

        return payload
    }else{
        let payload = {}
        payload = {
            id: consumerModel.id,
            name: consumerModel.name,
            address : {
                city: consumerModel.city
            }
        }
        return payload
    }
    
}

const find = async (request, h) => {
    try {
        const res = await consumerBusiness.findAll()
        const teste = toPayload(res)
        return h.response(teste).code(201)
    } catch (error) {
        console.log(error);
        return h.response(error.message).code(404)
    }
}

const getById =  (request, h) => {
    const id = request.params.id;

    const consumer = consumerBusiness.findByid(id);
    
    if(consumer) {
        return h.response(consumer).code(200);
    }
    return h.response("Not found").code(404);
}

module.exports = {find, create, getById};