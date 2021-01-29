/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAverage;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    maxAverage = sum;
    for (let j = k; j < nums.length; j++) {
       sum += nums[j] - nums[j - k];
         if(maxAverage < sum) {
           maxAverage = sum;
         }
       
    }
       return maxAverage/k;
   
};