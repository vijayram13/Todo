
//model call
const model = require("../models/todo_schema")


module.exports.home = function (req, res) {
    //console.log(req.query.desc);

    readDocument().then((result) => {

        //console.log("result", result);
        
        return res.render('home', {
            // passing the title to home page
            title: "my page",
            //passing the collection data to home page
            taskList: result
        });
        
    })
        .catch((error) => {
            console.log("There is an Error");
        });





};

module.exports.task = function (req, res) {

    
    // delete function to delete document
    deleteDocument(req.query.id)

    // redirect to home page
    res.redirect('back');
};


module.exports.formdata = function (req, res) {
    //console.log(req.body);

    //create documents
    createDocuments(req);

    //redirect to home page
    return res.redirect('back');


};


//create document in MongoDB
const createDocuments = async(req)=> {
    try {
        //get data from server(using parser)
        const createdocument = new model(req.body);
        //console.log("created document", createdocument);
        const document =  await createdocument.save();
        //console.log(document);
    } catch (error) {
        console.log(error.message);
    }
};



//readDocument from MongoDB
const readDocument = async () => {
    try {
        const result = await model.find();
        //console.log(typeof(result[0]));

        return result;
    } catch (error) {
        console.log("There is an Error!");
    }

};


//deleteDocument from MongoDB
const deleteDocument = async (id) => {
    try {
        //console.log("Id :",id);

        // different delete methods
        const data  = await model.findByIdAndDelete(id);
        // const data  = await model.deleteOne({_id:id});
        //const data  = await model.deleteMany({_id:[]});


        // console.log("deleteDocument:",data);

    } catch (error) {
        console.log("There is an Error! in deleteDocument section",error);
    }
};


