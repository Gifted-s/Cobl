const large_min=[2,3,123,200,7,9,80,5,1];
var largest;
var small;
var new_array;
function differenceInAges(arr){


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

  new_array= [small, largest, largest-small];
 
}
console.log(new_array)

}
differenceInAges(large_min)
