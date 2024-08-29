let arr = [1,2,3,4,5,6,7,8,9,10,15,18]

// Write a function that takes an array of numbers as input, and returns a new array with only even values. 
// Read about filter in JS
function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}
console.log(filterEvenNumbers(arr));

//now trying callback
function evenno(number) {
    return number % 2 === 0;
}
function filtercallbak(numbers) {
    return numbers.filter(evenno(numbers));
}

console.log(filtercallbak)




//Suppose you have an array of numbers: [5, 10, 15, 20, 25, 30]. Write a JavaScript function using,
//  the filter method to return a new array containing only the numbers greater than 15.