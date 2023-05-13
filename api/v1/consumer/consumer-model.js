const Sequelize = require('sequelize');
const db = require('../../../config/db');
const { allow } = require('joi');

const Consumer = db.define('consumer', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'cidade'
    }
},{
    timestamps: false,
    tableName: 'cliente'
})

module.exports = Consumer