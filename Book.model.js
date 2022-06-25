
/**
 * This file will be ude to represent the Books Schema
 */


module.exports=(sequelize,Sequelize)=>{

    const Book=sequelize.define("book",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:Sequelize.STRING,
            allowNull:false

        },

        author:{
            type:Sequelize.STRING
        },

        published:{
            type:Sequelize.STRING
        },
        publisher:{
            type:Sequelize.STRING
        },
    },
        {
            tableName:"books"
         } )

         return Book;
}