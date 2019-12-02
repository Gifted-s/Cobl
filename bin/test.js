

function Gifted_array_sort(...args){
    const array= args;
  
    for(var i=0;i<array.length; i++){
        for(var j=0;j<array.length; j++){
            var temp=array[i];
            var next= array[j];
            
            if(array[i]<array[j]){
                array[i]= next;
                array[j]= temp;
            }
        }
        
    }
    return array;
}
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
console.log(arr)
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
console.log(obj)





