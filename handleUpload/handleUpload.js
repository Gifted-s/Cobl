module.exports = function uploadProduct(req ,res, User){

User.findByIdAndUpdate({"_id": req.body.user} ,{$push:{products:req.body}}).then((result)=>{
console.log(result)
res.json(result)
})
.catch(err=>{
console.log(err);
})
}
