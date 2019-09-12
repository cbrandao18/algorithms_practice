/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
  this.data = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.data[key]) {
    this.data[key] = [{ value, timestamp }]
  } else {
    this.data[key].push({ value, timestamp })
  }

};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.data[key]) {
    return ""
  } else {
    let entries = this.data[key];
    return this.search(entries, timestamp)
  }
};

TimeMap.prototype.search = function (entries, timestamp) {

  let currentClosest = "";
  for (let entry of entries) {
    if (entry.timestamp === timestamp) return entry.value

    if (entry.timestamp < timestamp) {
      currentClosest = entry.value
    }
  }

  return currentClosest
}