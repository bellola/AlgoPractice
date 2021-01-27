var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i]);
    nums[i] += nums[i - 1];
  }

  return nums;
};

//worse alt

var runningSum = function (nums) {
  let arr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let val = 0;
    val = nums[i] += nums[i - 1];
    arr.push(val);
    val = 0;
  }

  return arr;
};
