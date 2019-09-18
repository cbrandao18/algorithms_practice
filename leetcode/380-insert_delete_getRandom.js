/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.nums = [];
  this.map = {}; // key is num, val is idx of that num in nums array
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  let idx = this.map[val]
  if (idx >= 0) {
    return false
  } else {
    this.nums.push(val)
    this.map[val] = this.nums.length - 1
    return true
  }

};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  let idx = this.map[val]
  if (idx >= 0) {
    let length = this.nums.length
    if (idx !== length - 1) {
      //perform swap
      let numToSwap = this.nums[length - 1]
      this.nums[idx] = numToSwap
      this.nums[length - 1] = val
      this.map[val] = length - 1
      this.map[numToSwap] = idx
    }
    this.nums.pop()
    delete this.map[val]
    return true
  } else {
    return false
  }

};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let idx = Math.floor(Math.random() * this.nums.length)
  return this.nums[idx]
};