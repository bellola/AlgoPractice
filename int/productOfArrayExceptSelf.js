[1,2,3,4] //input

[1,1,2,6] //left

[ 24, 12, 4,1]//right

[24,12,8,6] //result


var productExceptSelf = function(nums) {
    const output = [];
     let mult = 1;
     for(let i = 0; i < nums.length;i++){
         output[i] = mult;
         mult *= nums[i]
 
     }
     console.log(output)
 
     mult = 1;
     
     //mult = 24
     
     //[1,2,3,4] nums
     
     //[24,12,8,6] output
     
   
     for(let i = nums.length-1; i >= 0; i--){
         output[i] = output * mult;
         mult = mult * nums[i]
 
     }
 
     return output
 };