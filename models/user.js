const sequilize = require('../utils/database');
const { DataTypes } = require('sequelize');

const User = sequilize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
});

module.exports = User;
