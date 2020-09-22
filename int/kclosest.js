var findClosestElements = function(arr, k, x) {
    
    let hash = {};
    
    let res = [];
    
    if(x<arr[0]) return arr.slice(0,k);
    
    if(x>arr[arr.length-1]) return arr.slice(-k);
    
    for(let i = 0; i < arr.length;i++){
        let diff = Math.abs(x-arr[i])
        
        hash[arr[i]] = diff
    }
    
    console.log(hash)
    
    for(let key of hash){
        
    }
    
};