
module.exports.home = function(req,res){
    return res.render('home',{
        title:"my page"
    });

};

module.exports.about = function(req,res){
    console.log(req);
    res.send('About Parmila');
};


module.exports.formdata = function(req,res){
    console.log(req.body);
    return res.redirect('back');
    
    
};