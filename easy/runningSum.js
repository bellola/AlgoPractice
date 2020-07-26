var runningSum = function(nums) {

    for(let i in nums){
      console.log(nums[i])
      nums[i] += nums[i-1]
    }

 
    return nums
};