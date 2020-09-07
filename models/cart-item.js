const Sequilize = require('sequelize');

const sequilize = require('../utils/database');

const CartItem = sequilize.define('cartItem', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    quiantity: Sequilize.INTEGER,
});

module.exports = CartItem;
