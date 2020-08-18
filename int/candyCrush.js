// Write a function to crush candy in one dimensional board. In candy crushing games, groups of like items are removed from the board.
//  In this problem, any sequence of 3 or more like items should be removed and any items adjacent to that sequence should now be considered adjacent to each other.
//   This process should be repeated as many time as possible. You should greedily remove characters from left to right.

// Example 1:

// Input: "aaabbbc"
// Output: "c"
// Explanation:
// 1. Remove 3 'a': "aaabbbc" => "bbbc"
// 2. Remove 3 'b': "bbbc" => "c"
function candyCrush(str){
    let stack = []
    let count = 0
    for(let i = 0; i < str.length; i++){
      console.log(count)
      console.log(stack)
      let last = stack[stack.length-1]
      let char = str[i]
      if(!stack.length){
         stack.push(char);
        count++
      }
      if(char === last){
        stack.push(char);
        count++
      }
     if(char !== last && count >=3){
       let j = 0
       while(count>0){
         stack.pop()
         count--
       }
       stack.push(char)
       count++
     }
     
     
    }
  
    if(!stack.length) return ""
    return stack.join('')
  
  