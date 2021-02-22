// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
    let map = {}
    let result = 0
    for(let i = 0; i< inputString.length;i++){
        let char = inputString[i]
        map[char] ? map[char] +=1 : map[char] = 1
    }
    
    for(key in map){
        if(map[key]%2!=0){
            result+=1
        }
    }
    
    return result<2
}