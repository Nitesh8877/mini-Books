/**
 * 1. Create the DB conncetion with the help of sequilize
 * 2. Export all the functionalities of the model thorogh the file
 * 
 * 
 */

const config=require("../configs/db.config");
const Sequelize=require("sequelize");
const sequelize = require("sequelize");

/**
 * Creating the db connection
 */

const seq=new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,{
        host:config.HOST,
        dialect:config.dialect
    }
);


const db={

}

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.book=require("./Book.model.js")(db.sequelize,Sequelize);

module.exports=db;