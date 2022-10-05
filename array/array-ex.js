var arr = [12,15,78,90,34];

arr[5]= 89;
arr[1] = 45;
// console.log(arr[0]);
// console.log(arr[1]);

for(var i=0;i<arr.length;i++){
    console.log("Index:", i, " Val:", arr[i]);
}

// print array elements in revers order.
console.log("print array elements in revers order.");
for(var i= arr.length-1; i>=0; i--){
    console.log("Index:", i, " Val:", arr[i]);
}

// print array elements at even index

console.log("print array elements at even index.");
for(var i= arr.length-1; i>=0; i--){
    if(i%2 == 0){
        console.log("Index:", i, " Val:", arr[i]);
    }
}