// problem 1
/* var fruits = ['apple', 'banana', 'orange']
console.log(fruits[1]);
console.log(fruits.indexOf('banana'));
fruits[1] = 'mango';
console.log(fruits);
var remove = fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits); */

// problem 2
/* var number = [16, 13, 14]
if (number[0] > number[1]) {
    if (number[0] > number[2]) {
        console.log(number[0], 'is the greatest number');
    } else {
        console.log(number[2], " is the greatest number");
    }
}
else {
    if (number[1] > number[2]) {
        console.log(number[1], 'is the greatest number');

    } else {
        console.log(number[2], 'is the greatest number');
    }
} */

// problem 3
let side1 = 10, side2 = 20, side3 = 30;
if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('isosceles');
} else {
    console.log('not isosceles');
}
