const indexmodel = {};

indexmodel.barang_customer = require('./barang_customer.js')
indexmodel.customer = require('./customer.js')
indexmodel.pengecekan = require('./pengecekan.js')
indexmodel.teknisi = require('./teknisi.js')
indexmodel.transaksi_barang_customer = require('./transaksi_barang_customer.js')
indexmodel.users = require('./users.js')
indexmodel.dbconfig = require('./dbconfig.js')

module.exports = indexmodel;