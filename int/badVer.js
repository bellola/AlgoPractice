// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search
       var start = 1, end = n
       while(start < end){
           var mid = Math.floor(start + (end-start) / 2)
           if(isBadVersion(mid)){
                end = mid // look on left side of mid
           }else{
               start = mid+1 // look on the right side of mid
           }
       }
       return start;
    };
}; 

//


var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n
        while (left < right) {
            let middle = Math.floor(left + ((right - left) / 2))
            
            if (isBadVersion(middle)) {
                right = middle
            } else {
                left = middle + 1
            }
        }
        
        return left
    };
};