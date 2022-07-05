const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const pengecekan = sequelize.define('pengecekan', {

    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },
    id_teknisi : {
        type : DataTypes.BIGINT
    },
    tanggal : {
        type : DataTypes.DATE
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
    tableName: 'pengecekan',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

})
module.exports = pengecekan;