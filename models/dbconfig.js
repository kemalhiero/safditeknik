const { Sequelize } = require('sequelize');

const dbconfig = new Sequelize('pbd_safditeknik', 'postgres', '12345', {
    host: '127.0.0.1',
    dialect: 'postgres'
  });

  try {
    dbconfig.authenticate();
    console.log('Berhasil terkoneksi');   //tes koneksi
  } catch (error) {
    console.error('Ga bisa konek njirrrr', error);
  }

module.exports = dbconfig;