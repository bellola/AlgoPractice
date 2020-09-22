var findClosestElements = function(arr, k, x) {
    if(x<arr[0]) return arr.slice(0,k)
    
    if(x>arr[arr.length-1]) return arr.slice(-k)
    
    
    
};