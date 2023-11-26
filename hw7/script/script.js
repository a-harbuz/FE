// Task-1
function compare(a,b){
    if (a%2==0 && b%2==0){
        return a*b;
    } 
    else if (a%2!=0 && b%2!=0){
        return a+b;
    } 
    else if (a%2!=0 && b%2==0){
        return a;
    } else if (a%2==0 && b%2!=0){
        return b;
    }
    return 0;
}
console.log(compare(2,2));
console.log(compare(7,7));
console.log(compare(2,5));


// Task-2
function days(sec){
    return Math.trunc(sec/(60*60*24));
}
let sec=223000;
console.log(`В ${sec} секундах полных суток - ${days(sec)}`);


// Task-3
function isPrime(num){
    //Простое число — это натуральное число больше 1, 
    //у которого есть всего два делителя: единица и само число.
    if (num<=1) return false;
    let count=0;
    for(let i=2; i<=num; i++){
        if (num%i==0) count+=1;
    }
    if (count > 1) return false; // число непростое
    else return true; // число простое
}

console.log(isPrime(47)); //простое
console.log(isPrime(4));  //непростое


// Task-4
function least(a,b){
    if (a<b) console.log('наименьшее число - ' + a);
    else if (b<a) console.log('наименьшее число - ' + b);
    else console.log('числа равны!');
}
least(3,6);

// Task-5
function arrayAb(a,b){
    //let minNum;
    let arr=[];
    let minNum;
    let maxNum;
    if (a>b) {
        minNum = b;
        maxNum = a;
    } else if (a<b) {
        minNum = a;
        maxNum = b;
    } else return arr;

    for(let i=minNum; i<=maxNum; i++ ){
        arr.push(i);
    }
    return arr;
}
console.log(arrayAb(9,2));


// 1. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
// 2.	Написать функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
// 3.	Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.
// 4.	Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.
// 5.	Написать функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
