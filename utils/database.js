const { Sequelize } = require('sequelize');

const sequilize = new Sequelize('nodejs-app', 'npolyakoff', 'kotMarkiz123sas', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequilize;