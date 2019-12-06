
var counter=0;
//bubble sort algorithm
const arr=[2,5,4,2,5,6,6,1,1,7,3,2,6,2];
for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr.length; j++){
        if(arr[i] < arr[j]){
            
           const temp= arr[i];
           const next= arr[j];
           arr[i]= next;
           arr[j]=temp;
           
        }
    }
}
//Algorithm to check duplicate number of elements in a array
const obj={}

for(i = 0;i<arr.length; i++){
if(arr[i] === arr[i+1] || arr[i] === arr[i-1]){
    if(obj[arr[i]]){
        obj[arr[i]]= Math.floor(obj[arr[i]])  + 1
    }
    else{
        obj[arr[i]]=1
    }
}
}
// algorithm to check a missing number in a consecutive array
const arr_=[]
for(var i=0;i<arr_.length;i++){
if(arr_[i] + 1!= arr_[i+1]){
console.log(arr_[i]+1, " is missing")
}
}

//algorithm to check the largest and smallest element in an array
var largest;
var small;
const large_min=[2,0,123,200,-7,7,9,80,5,1];
for(i=0; i<large_min.length; i++){
    //to get largest number
    if(large_min[i]>large_min[i+1]){
        var temp= large_min[i];
        var next= large_min[i+1];
        large_min[i+1]=large_min[i];
        large_min[i]=next
        largest=large_min[i+1]
        
       }
    
   //to get smallest number
   if(large_min[large_min.length-1-i] <large_min[large_min.length-2-i] ){
       var temp= large_min[large_min.length-2-i];
       var next= large_min[large_min.length-1-i];
       large_min[large_min.length-1-i]=temp;
       large_min[large_min.length-2-i]= next;
        small=large_min[0]
   }
  

}


// console.log("The largest number in the array is " , largest)
// console.log("The smallest number in the array is ", small)


//An algorithm to check the element that add up to a particular number
const sum=12;
const Arr= [1,3,5,2,4,0];
const Obj={};
for(let i=0;i<Arr.length;i++){
if(Obj[Arr[i]]){
    console.log(Arr[i] + " and " +Obj[Arr[i]]+" Add up to " +sum )
}
  Obj[sum-Arr[i]]=Arr[i]
}

//An Algorithm to delete duplicates from an array
const dup=[1,2,4,2,6,8,1];
const new_=[];
const obj_={}
for(let i=0; i<dup.length; i++){
      if(obj_[dup[i]]){
          delete obj_[dup[i]]
      }
      else{
        obj_[dup[i]]=true
      }
}
const res= Object.keys(obj_)
for(const i of res){
    new_.push(Math.floor(i))
}
console.log(new_)