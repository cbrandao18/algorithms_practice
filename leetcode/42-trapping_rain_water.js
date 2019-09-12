/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let water = 0;

  for (let i=1; i < height.length; i++){
    let left = Math.max(...height.slice(0, i))
    let right = Math.max(...height.slice(i, height.length))

    let min = Math.min(left, right)
    if (min - height[i] > 0) {
      numWater += min - height[i]
    }
  }

  return water;
};

var trap2 = function (height) {

  let totalWater = 0;

  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {

    if (height[left] < height[right]) { //elevation smaller on left
      if (height[left] > leftMax) { //found larger max elevation on left
        leftMax = height[left]
      } else { // it's a dip in the elevation, water will pool there, add to totalWater
        totalWater += (leftMax - height[left])
        left += 1
      }
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right]
      } else {
        totalWater += (rightMax - height[right])
        right -= 1
      }
    }
  }

  return totalWater;
};