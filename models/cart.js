const Sequilize = require('sequelize');

const sequilize = require('../utils/database');

const Cart = sequilize.define('cart', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
});

module.exports = Cart;
