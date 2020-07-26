var shuffle = function(nums, n) {
    let nums2 = nums.splice(nums.length/2)
    let result = []
    for(let i in nums){
        result.push(nums[i])
        result.push([nums2[i]])
    }
   
   return result

};

//Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]