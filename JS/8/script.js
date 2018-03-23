// MAP


// var numbers = [1, 2, 3, 4, 5];

// var output = [];

// for (var index = 0; index < numbers.length; index++) {
//     //output[index] = numbers[index] * 10;

//     output.push(numbers[index] * 10);

// }


// console.log(output);


// ES6

const numbers = [1, 2, 3, 4, 5];

const output = numbers.map(function(number) {
    return number * 10;
})



console.log(output);