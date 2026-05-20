const n = 153;

//sum of first n natural numbers
let sum = 0;
for(let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log('sum of first n natural numbers is ',sum);

//table of a given number
let table = 1;
for (let i = 1; i <= 10; i++) {
    console.log(n,"*",i,"=",n*i);
}

//sum of digits of a number
let num = n;
let digit;
let sumOfDigit = 0;
while (num != 0) {
    digit = num % 10;
    sumOfDigit += digit;
    num = Math.floor(num/10);
}

console.log("sum of all digits of the given number is ",sumOfDigit);

//check if the given number is prime or not
const numP = n; 

let isPrime = true;
if (numP <= 1) {
    isPrime = false;
} else if (numP === 2) {
    isPrime = true; 
} else if (numP % 2 === 0) {
    isPrime = false;
} else {
    for (let i = 3; i * i <= numP; i += 2) {
        if (numP % i === 0) {
            isPrime = false;
            break;           
        }
    }
}

if (isPrime) {
    console.log(`${numP} is a prime number.`);
} else {
    console.log(`${numP} is not a prime number.`);
}

//factors of a given number
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}

//check if number is a armstrong number or not
let temp = n;
let armsum = 0;

while (temp > 0) {
    let digit = temp % 10;          
    armsum += digit * digit * digit;   
    temp = Math.floor(temp / 10);   
}

if (armsum === n) {
    console.log("It is an Armstrong number");
} else {
    console.log("Not an Armstrong number");
}