const { find, findOneAndDelete } = require("../Models/Expence");
const userModel = require("../Models/Expence")



// to create new user  //

exports.AddExpence = async (req, res) => {
    try{
        const exp = await new userModel(req.body).save();
         res.json(exp);
        }catch(err){
            res.json({err});

        }
}


// to get useer data from database //

exports.getAllExpence = async (req, res) => {
    try{
        const exp = await  userModel.find();
         res.json(exp);
        }catch(err){
            res.json({err});

        }
}

// to get specific user data from database //

exports.getExpence = async (req, res) => {
  try{
      const exp = await  userModel.find({_id:req.params.userId});
       res.json(exp);
      }catch(err){
          res.json({err});

      }
}


// to delete user data from database//


exports.delExpence = (req, res) => {

        userModel.findOneAndDelete({_id:req.params.userId} , (err , data) => {
              if(err){
                res.json({err});
              }else{
                res.json(data);
              }
        })
        
}


// to update user data from database//


exports.updateExpence = (req, res) => {

    userModel.findOneAndUpdate({_id:req.params.userId},req.body,{new:true} , (err , data) => {
          if(err){
            res.json({err});
          }else{
            res.json(data);
          }
    })
    
}


