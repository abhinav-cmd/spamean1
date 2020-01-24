var About=require('./models/contacts');
module.exports=function(expobj){
    expobj.post("/api/abouts",(req,res)=>{
      console.log("First Name: "+req.body.first_name+"\n Last Name: "+req.body.last_name+"\nContact Number : "+req.body.phone);
      let newContact=new About({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
      });
      newContact.save(function(err,contact){
        if(err)
        {
          res.json({msg:'Failed to add the Contact'});
        }
        else{
          res.json({msg:'Contact added Successfully'});
        }
      });
    });
  };
