const model = require('../models/indexmodel');
const { Op, QueryTypes  } = require("sequelize");
const sequelize = model.dbconfig;
const controller = {};

controller.tampilDashboardAdmin = async function(req, res){
    res.render("admin/dashboard", {dasbord: "", perbaikan: "collapsed"});
}

controller.tampilDaftarPelanggan = async function(req, res){
    const pelanggan = await model.customer.findAll();

    res.render("admin/pelanggan", {dasbord: "collapsed", perbaikan: "", pelanggan});
}

controller.tampiltambahBarang = async function(req, res){
    const id = req.params.id;
    const pelanggan = await model.customer.findOne({where:{id}, attributes: [ 'id', 'nama', 'no_hp', 'alamat']})
    const barang = await model.barang_customer.findAll({where: { id_pelanggan: id }});

    res.render("admin/tambah", {dasbord: "collapsed", perbaikan: "", barang, pelanggan});
}

controller.tambahPelanggan = async function(req, res){
    const { name, no_hp, alamat } = req.body;

    try {
        await model.customer.create({
            nama: name,
            no_hp,
            alamat
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }

}

controller.tambahBarang = async function(req, res){
    const { nama_barang, deskripsi,id_pelanggan } = req.body;

    try {
        await model.barang_customer.create({
            id_pelanggan,
            nama_barang,
            deskripsi
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }

}



module.exports = controller;