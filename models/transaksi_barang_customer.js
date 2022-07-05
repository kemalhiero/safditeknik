const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const transaksi_barang_customer = sequelize.define('transaksi_barang_customer', {

    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },
    id_barang : {
        type : DataTypes.BIGINT
    },
    no_pengecekan : {
        type : DataTypes.BIGINT
    },
    jumlah : {
        type : DataTypes.INTEGER
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
    tableName: 'transaksi_barang_customer',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

})
module.exports = transaksi_barang_customer;