//Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

//Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

//Note: You are not suppose to use the library's sort function for this problem.

var sortColors = function(nums) {
    var low = 0,
        high = nums.length - 1,
        temp;
    
    for (var i = 0; i <= high; ) {
        if (nums[i] === 0) {
            temp = nums[i];
            nums[i] = nums[low];
            nums[low] = temp;
            i++;
            low++;
        } else if (nums[i] == 2) {
            temp = nums[i];
            nums[i] = nums[high];
            nums[high] = temp;
            high--;
        } else {
            i++;
        }
    }
};