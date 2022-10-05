var arr = [3,5,6,8,9,12,14,68];
function printPrimeNumbers(){
    for(var i=0; i<arr.length; i++) {
        var isPrime = isPrimeNum(arr[i])
        if(isPrime){
            console.log(arr[i]);
        }
    }
    
}

function isPrimeNum(num){
    var count = 0;
    for(var i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    return count == 2;
}

printPrimeNumbers();