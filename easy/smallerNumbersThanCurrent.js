var smallerNumbersThanCurrent = function(nums) {
    let arr = []
    for(let i = 0; i<nums.length;i++){
        let count = 0;
        for(let j = 0;j<nums.length;j++){
            let a = nums[i]
            let b = nums[j]
            if(a !== b && a>b){
                count++
            }
        }
        arr.push(count)
        count = 0
    }
    return arr

    
};