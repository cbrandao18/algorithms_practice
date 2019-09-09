/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let triplets = [];
  if (nums.length < 3) return triplets;

  nums = nums.sort((a, b) => a - b);

  for (let i=0; i < nums.length; i++){

    let j = i + 1;
    let k = nums.length - 1;

    while (j < end){
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        //triplet found
        triplets.push([nums[i], nums[j], nums[k]])

        // skip over the entries with the same value, otherwise
        // we would be pushing a duplicate triplet
        while (nums[j + 1] === nums[j]) j++
        while (nums[k - 1] === nums[k]) k--

        j++
        k--
      } else if (sum < 0){
        //increase pointer thats towards the smaller end of the sorted array
        j++
      } else if (sum > 0){
        //increase pointer thats towards the larger end of the sorted array
        k--
      }
    }
  }


  return triplets;
};