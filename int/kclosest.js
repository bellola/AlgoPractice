var findClosestElements = function(arr, k, x) {
    
    let temp = [];
    
    if(x<arr[0]) return arr.slice(0,k);
    
    if(x>arr[arr.length-1]) return arr.slice(-k);
    
    for(let i = 0; i < arr.length;i++){
        let diff = Math.abs(x-arr[i])
        temp.push([arr[i], diff])
    }
    
    temp.sort((a,b) => a[1] - b[1])
    
    temp = temp.slice(0,k)
    
    temp.forEach(arr =>{
        arr.pop()
    })
    
    return temp.sort((a,b) => a-b)
    
};