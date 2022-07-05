const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const teknisi = sequelize.define('teknisi', {

    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },
    nama : {
        type : DataTypes.STRING
    },
    alamat : {
        type : DataTypes.STRING
    },
    no_hp : {
        type : DataTypes.STRING
    },
    deleted_at : {
        type : DataTypes.TIME
    },
    created_at : {
        type : DataTypes.TIME
    },
    updated_at : {
        type : DataTypes.TIME
    }

}, {
    tableName: 'teknisi',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

})
module.exports = teknisi;