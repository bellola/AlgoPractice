//Given an array of integers, find if the array contains any duplicates.

//Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
    let hash = {};
    for (let i = nums.length -1; i >=0 ; i--) {
        if (hash[nums[i]]) {
            return true;
        } else {
            hash[nums[i]] = true;
        }
    }
    return false;
};

//first dup

function firstDuplicate(a) {
    let hash = {};
   
    for(let i = 0; i < a.length;i++){
       if(!hash[a[i]]) {
           hash[a[i]] = true
           }
        else if(hash[a[i]]) return a[i]

        }
        return -1
}
