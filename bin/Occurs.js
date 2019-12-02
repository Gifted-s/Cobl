var counter=0;
//bubble sort algorithm
const arr=[1,2,5,4,6,3,4,3,5,8,9,5,6,3,4,5,6,2];
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
console.log(obj)

