//Given and integer k and a list of integers, count the number of distinct valid pairs of integers(a,b) in the list for which a+k = b.

*
 * Complete the 'countPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. INTEGER k
 */

// function countPairs(numbers, k) {
//     // Write your code here
//     let count = 0
//     let hash = {}
//     for(let i = 0; i<numbers.length; i++){
//         if(!hash[numbers[i]]){
//             hash[numbers[i]] = true
//         }
//     }

//     numbers.forEach( element => {
//         if(hash[element+k] === true){
//             count++
//         }
//         if(hash[element-k] === true){
//             count++
//             delete hash[element]
//         }
//     })


//     return count
// }


function countPairs(numbers, k) {
  numbers.sort((a, b) => a - b)
  let left = 0
  let right = 1
  let last
  let count = 0
  while (right < numbers.length) {
    if (last === numbers[left]) {
      left++
      if (right === left) right++
      continue
    }
    let diff = numbers[right] - numbers[left]
    if (diff < k) {
      right++
      continue
    }
    if (diff > k) {
      left++
      if (right === left) right++
      continue
    }
    count++
    last = numbers[left]
    left++
    if (right === left) right++
  }

  return count
}