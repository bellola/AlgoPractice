var runningSum = function(nums) {

    for(let i = 1; i<nums.length;i++){
      console.log(nums[i])
      nums[i] += nums[i-1]
    }

 
    return nums
};