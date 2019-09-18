// Create a function prodArray that takes an array of 
// integers and returns a new array such that each index contains the product of all numbers in the original array except for the integer at that index.

//   Ex. [1, 2, 3] => [6, 3, 2]

// design questions: what happens when you go google.com
// design todo app

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [1]

  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1]
  }

  let right = 1;
  for (let j = result.length - 1; j >= 0; j--) {
    result[j] = result[j] * right
    right = right * nums[j]
  }

  return result
};