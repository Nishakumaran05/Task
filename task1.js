// Arithmatic Operator

function arithmatic(a,b){
    console.log("Add a Numbers : "+(a+b))
    console.log("Subtract a Numbers : "+(a-b))
    console.log("Multiple a Numbers : "+(a*b))
    console.log("Divide a Numbers : "+(a/b))
    console.log("Remaining Numbers : "+(a%b))
}
arithmatic(30,20)
console.log(" ")

// Using string

function nameadd(a,b){
    console.log("Add a String : " +(a+b))
}
nameadd("Class ","Room")
console.log(" ")

//print a number 1 to 10

for(i=1;i<=10;i++){
    console.log(i)
}
console.log(" ")

// Reverse a Number

for(i=10;i>=1;i--){
    console.log(i)
}
console.log(" ")

// Even Numbers 1 to 20

for(i=2;i<=20;i+=2){
    console.log(i)
}
console.log(" ")

// Odd numbers in 1 to 20

for(i=1;i<=20;i+=2){
    console.log(i)
}
console.log(" ")

// Multiple of 5


for(i=1;i<=10;i++){
    console.log(i*5)
}
console.log(" ")

//Print a number of multiplication

var a=25;
console.log(a*a)

console.log(" ")


//sum of numbers

var s=0;
for(i=1;i<=100;i++){
    s=s+i;
}
console.log("Sum of number " + s)

console.log(" ")


//product of number

var p=1;
for(i=1;i<=10;i++){
    p*=i;
}
console.log("Product of number "+p)

console.log(" ")

//count a numbers
var count=0;
for(i=1;i<=50;i++){
    count+=1;
}
console.log(count)

console.log(" ")

//divisible by 3

for(i=1;i<=30;i++){
    if(i%3==0){
        console.log(i)
    }
}