const db=require("../Models");

const Book=db.book;
const Op=db.Sequelize.Op;

/**
 * Create and save new Books Items
 * 
 */

exports.create=(req,res)=>{

   const book={
    name:req.body.name,
    title:req.body.title,
    author:req.body.author,
    published:req.body.published,
    publisher:req.body.publisher
   }
   Book.create(book)
   .then(books=>{
        res.status(201).send(books);
   })
   .catch(err=>{
    res.status(500).send({
        message:"some internal error"
    })
   })

    
}


/**
 * Get all books items
 */

exports.findAll=(req,res)=>{

    let promise=Book.findAll();

    promise
    .then(books=>{
        res.status(201).send(books);
   })
   .catch(err=>{
    res.status(500).send({
        message:"some internal error"
    })
   })


}

/**
 * Get a book based on the book id
 */


exports.findOne=(req,res)=>{
    const bookId=req.params.id;

    Book.findByPk(bookId)
    .then(book => {
        if(!book){
            return res.status(400).json({
                message:"Product not found"
            })
        }
        res.status(200).send(book);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal error while fetching the category based on id"
        })
    })
}



/**
 * update the book items by id
 */

exports.update=(req,res)=>{

    const book={
        name:req.body.name,
        title:req.body.title,
        author:req.body.author,
        published:req.body.published,
        publisher:req.body.publisher
       }
       const bookId=req.params.id;
       Book.update(book,{
        where:{
            id:bookId
        }
       })

       .then(updates=>{
        Book.findByPk(bookId)
        .then(book=>{
            res.status(200).send(book);
        })
        .catch(err=>{
            res.status(500).send({
                message:"updation happed successfully , not some internal error"
            })
        })

        .catch(err=>{
            res.status(500).send({
                message:"some internal error"
            })
        })
       })

}



exports.delete=(req,res)=>{
    const bookId=req.params.id;
    Book.destroy({
        where:{
            id:bookId
        }
    })
    .then(result=>{
        res.status(200).send({
            message:"successfully deleted the product"
        })
    })
    .catch(err=>{
        res.status(500).send({
            message:"some internal error "
        })
    })

}