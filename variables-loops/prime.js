function isprime(num) {
    for (let i = 2; i * i <= num; i++)
    if (num % i === 0)
    return false;
    return num > 1;
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

var result = isPrimeNum(8);
console.log(result);
