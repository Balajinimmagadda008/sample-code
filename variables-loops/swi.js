var month = 5;
var year = 2020;
var noofDays;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
       noofDays = 31;
    break;

    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
       noofDays = 30;
    break;

    case 2:
        if((year % 4 ==0) && (year % 100 != 0) || (year % 400) == 0) 
            noofDays = 29;
        else
            noofDays = 28;      
}
console.log(noofDays);