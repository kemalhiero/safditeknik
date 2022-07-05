const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const users = sequelize.define('users', {

    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },
    name : {
        type : DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
    role : {
        type : DataTypes.STRING
    },
    email_verified_at : {
        type : DataTypes.TIME
    },
    password : {
        type : DataTypes.STRING
    },
    remember_token : {
        type : DataTypes.STRING
    },
    current_team_id : {
        type : DataTypes.STRING
    },
    profile_photo_path : {
        type : DataTypes.STRING
    },
    created_at : {
        type : DataTypes.TIME
    },
    updated_at : {
        type : DataTypes.TIME
    },

}, {
    tableName: 'users',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

})
// mal jn typo mal :V customer wey dak costumer wkwkw beda table beko
//costumer yg ma ko?
// di models ko mal :v cek namo file models e juo samo pas define
// soal e den buek di database tu customer u dlu baru o
// ba beda error beko :v
// hoo siip2 wkwkwk
module.exports = users;