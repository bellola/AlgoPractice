//Write a program that outputs the string representation of numbers from 1 to n.

//But for multiples of three it should output “Fizz” instead of the number and for the 
//multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”. return results in an array

var fizzBuzz = function(n) {
    let result = []
    for(let i = 0; i<n; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log('Fizz')
            result.push('Fizz')
        }
        else if(i%5 === 0){
            console.log('Buzz')
            result.push('Buzz')
        }
        else if(i%3 === 0){
            console.log('FizzBuzz')
            result.push('FizzBuzz')
        }
        else{
            console.log(`${i}`)
            result.push(i)
        }
    }
    return result
};