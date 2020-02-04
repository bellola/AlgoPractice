//Given an array nums and a value val, remove all instances of that value in-place and return the new length.
var removeElement = function(nums, val) {
    let i = 0;

    while (i < nums.length) {
        nums[i] === val ? nums.splice(i, 1) : i++;
    }

    return nums.length;
}


//or maybe

var removeElement2 = function(nums,val){
    return (nums.filter(nums => nums !== val)).length
}