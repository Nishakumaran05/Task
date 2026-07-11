//print 1 to 10 using while

var n = 1;
while (n <= 10) {
    console.log(n);
    n++;
}
console.log("")

//print 10 to 1 

var n = 10;
while (n > 0) {
    console.log(n);
    n--;
}
console.log("")

//print even numbers

var n = 2;
while (n <= 20) {
    console.log(n)
    n += 2;
}
console.log("")

//print odd numbers

var n = 1;
while (n < 20) {
    console.log(n)
    n += 2;
}
console.log("")

//sum of 100 numbers

var n = 1;
var s = 0;
while (n <= 100) {
    s += n;
    n++
}
console.log(s)
console.log("")

//multiple of 7

var n = 1;
var m = 7;
while (n <= 10) {
    console.log(n * m);
    n++;
}

console.log("")

//Factorial of a number

var i = 1;
var n = 6;
var fact = 1;
while (i <= n) {
    fact = fact * i;
    i++
}
console.log(fact)
console.log("")

//reverse a number

var n=3464;
var r=0;
var t=0;
while(n>0){
    t=n%10;
    r=r*10+t;
    n=Math.floor(n/10);
}
console.log(r)
console.log(" ")

//count digits in number

var n=123456;
var count=0;
while(n>0){
    count++;
    n=Math.floor(n/10);
}
console.log(count)
console.log("")

//sum of digits

var n=125;
var sum=0;

while(n>0){
    sum+=n%10;
    n=Math.floor(n/10);
}
console.log(sum)
console.log("")

//Do while print 1 to 5

var n=1;
do{
    console.log(n);
    n++
}
while(n<=5)

console.log("")

//do while even num 2 to 20

var s =2;
do{
    console.log(s)
    s+=2;
}while(s<=20)

console.log("")

//multiple of  do while

var n=1;
var m=9;
do{
    console.log(n*m)
    n++;
}while(n<=10)
console.log("")

//factorial

var num=5;
var fact=1;
do{
    fact*=num;
    num--;
}while(num>0)
console.log(fact);

console.log("")

//simple menu

var prompt = require("prompt-sync")()
var num = Number(prompt("Enter the number"))
do{
    if(num!==0){
        console.log("Continue...")
    }
    var num1=Number()
}while(num!=0)
console.log("Program Ended")
