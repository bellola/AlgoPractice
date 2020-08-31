var maxSubArray = function(nums) {
    let max = -Infinity;
    let currentMax = 0;
    //set values for the max to -Inf because it may also be a neg num
    //and curr max to zero
    
    for(let i = 0; i < nums.length; i++) {
        //the current maximum is the max between current value and currentMax+num[i]
        //in the first case that is 0+arr[0]
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        //we compare max to the value above and set it to the biggest of the too
        max = Math.max(currentMax, max);               
    }
    
    return max;
}; 