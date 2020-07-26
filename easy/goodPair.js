var numIdenticalPairs = function(nums) {
    let good = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] === nums[j] && i<j) good++
            
            
        }
    }
    return good
};

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.