//You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if 
//two adjacent houses were broken into on the same night.
//Given a list of non-negative integers representing the amount of money of each house,
 //determine the maximum amount of money you can rob tonight without alerting the police.





var rob = function(nums) {
    /*
    Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for House Robber.
    Memory Usage: 33.8 MB, less than 25.89% of JavaScript online submissions for House Robber.
    
    O(n) time, O(1) space
	
	- Bottom up strategy
	- Iterative
	- Memoization
	
	Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
    */
    
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let maxAtTwoBefore = nums[0];
    let maxAtOneBefore = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
        
        maxAtTwoBefore = maxAtOneBefore;
        maxAtOneBefore = maxAtCurrent;
    }
    
    return maxAtOneBefore;
}