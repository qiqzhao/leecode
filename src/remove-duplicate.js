var removeDuplicates = function(nums){
  let uniqueSet = new Set(nums);
  nums.length = 0;
  uniqueSet.forEach(num => nums.push(num));
  return nums.length
}