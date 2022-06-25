
const CreateController=require("../controllers/Book.controller.js");

module.exports=function(app){
    app.post('/',CreateController.create);

    app.get('/',CreateController.findAll);

    app.get('/:id',CreateController.findOne);

    app.put('/:id',CreateController.update);

    app.delete('/:id',CreateController.delete);
}