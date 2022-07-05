const { Sequelize } = require('sequelize');

const dbconfig = new Sequelize('loki', 'root', '', {
    host: 'localhost',
    dialect: 'postgres'
  });

  try {
    dbconfig.authenticate();
    console.log('Berhasil terkoneksi');   //tes koneksi
  } catch (error) {
    console.error('Ga bisa konek njirrrr', error);
  }

module.exports = dbconfig;