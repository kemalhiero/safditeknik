const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const barang_custumer = sequelize.define('barang_customer', {

    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },
    id_pelanggan : {
        type : DataTypes.BIGINT
    },
    nama_barang : {
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
    },
    deskripsi : {
        type : DataTypes.STRING
    },


}, {
    tableName: 'barang_customer',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

})
module.exports = barang_custumer;