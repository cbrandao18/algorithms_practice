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