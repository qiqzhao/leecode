var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let i = 2;
  for (j = 2; j < nums.length; j++) {
    if(nums[j] !== nums[i-2]) {
      nums[i] = nums[j];
      i++
    }
  }
  return i;
};