//Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
    let hash = {}
    for(let i in s){
        let char = s[i];
        if(!hash[char]) hash[char] = 1
        else hash[char]++
    }
    for(let i in s){
        let char = s[i];
        if(hash[char] === 1) return i
    }
    return -1
};