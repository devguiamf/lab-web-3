const { Sequelize } = require('sequelize');

const sequelizeConfig = {
    logging: console.log,  /// mostra o que esta acontecendo no banco de dados
    dialect: 'mysql',
    port: 3306,
    host: 'localhost',
    pool: 2,  /// numero de conexoes simultaneas
}
const sequelize = new Sequelize('aula', 'root', 'fatec123*' , sequelizeConfig);
sequelize.authenticate().then(
    console.log('CONECTADO AO BANCO aula...')
).catch( (err) =>{
    console.log('ERRO AO CONECTAR', err)
})

module.exports = sequelize;

