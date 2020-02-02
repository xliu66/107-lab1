
var mathLib = require('./myMath');


function sayHello(){
    console.log("Hello, my name is Xiaochen");
}

function exc1(){
    // print numbers from 1 to 10, except the 7

    for (var i=1;i<11; i++){
        if (i!=7){
            console.log(i);
        }
        
    }

}

function exc2(){
    // print number from 20 to 1, except 7 and 13
    for (var j=20;j>0;j--){
        if (j!=7&&j!=13){
            console.log(j);
        }
    }

}
console.log("Hello World!");

/* sayHello();
exc1();
exc2(); */

function homeWork(){
    var numbers = [23,45,23,56,2,-34,8,1,-12,2,123,9045,546,34,-123];

    // 1 find the smallest
    var smallest = numbers [0];
    for (var i=0;i<numbers.length;i++){
        var n = numbers[i];
        if(n < smallest) smallest = n;
    }
    console.log("Smallest: ",smallest);

    // 2 the biggerst
    var biggest = numbers [0];
    for (var i=0;i<numbers.length;i++){
        var n = numbers[i];
        if(n > biggest) biggest = n;
    }
    console.log("Biggest: ",biggest);

    // 3 the sum of them all
    var sum =0;
    for (var i=0;i<numbers.length;i++){
        sum = sum + numbers[i];
    }
    console.log("Sum: ",sum);

    // 4 the multiplication of them all
    var mult = 1;
    for (var i=0;i<numbers.length;i++){
        mult = mult * numbers[i];
    }
    console.log("Multiplication: ",mult);

    // 5 print non positive (lower than 0)
    for (var i=0;i<numbers.length; i++){
        if (numbers[i]<0){
            console.log(numbers[i]);
        }
        
    }

    // 6 print the odd numbers
    for (var i=0;i<numbers.length; i++){
        if (numbers[i] %2 !=0){
            console.log(numbers[i]);
        }
        
    }
}


mathLib.funMath();

var res = mathLib.sum(21,21);
console.log("Result: ",res);

var bigger = mathLib.greater(89375359, 738459579);
console.log("bigger: ",bigger);

var smaller = mathLib.smaller(2648495, -849957);
console.log("smaller: ",smaller);

var r1 = mathLib.division(74869607,47586969070);
console.log(r1);

var r2 = mathLib.division(7585939,0);
console.log(r2);

var isE = mathLib.isEven(67);
var isE1 = mathLib.isEven(64);
console.log(isE);
console.log(isE1);


homeWork();
