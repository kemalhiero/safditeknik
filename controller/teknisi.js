const model = require('../models/indexmodel');
const { Op, QueryTypes  } = require("sequelize");
const sequelize = model.dbconfig;
const controller = {};

controller.tampilDashboardTeknisi = async function(req, res){
    res.render("teknisi/dashboard", {dasbord: "", perbaikan: "collapsed"});
}

controller.tampilPerbaikan = async function(req, res){
    const barang = await model.barang_customer.findAll({});

    res.render("teknisi/perbaikan", {dasbord: "collapsed", perbaikan: "", barang});
}


controller.ubahStatus = async function(req, res){

    const { id_barang, status } = req.body;

    try {
        await model.barang_customer.update({
            status
        },{
            where : { id:id_barang }
        });
        res.redirect('back');
        // res.send(status)
    } catch (error) {
        console.log(error);
    }
}


module.exports = controller;