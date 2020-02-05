// Implement strStr().

// Return the index of the first occurrence of needle in haystack, -1 if needle is not part of haystack or if haystack is empty.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1



var strStr = function(haystack, needle) {
    let tip = needle[0]
    let rest = needle.slice(1)
   
     if(haystack === ''){
       return 0
     }
     for(let i = 0; i < haystack.length; i++){
       if(haystack[i] === tip && haystack.slice(i,i+rest.length) === rest ){
        
         return i
 
       } 
 
     }
  
     return -1
    
 };

 //or

 var strStr = function(haystack, needle) {
     if (needle.length === 0 || haystack === needle) return 0
     return haystack.includes(needle) ? haystack.indexOf(needle) : -1
 };