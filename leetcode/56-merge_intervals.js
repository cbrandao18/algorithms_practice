/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort(sortPairsByStart)

  let merged = [];

  for (let interval of intervals) {
    let mergedItem = merged[merged.length - 1]
    if (!merged.length || mergedItem[1] < interval[0]) {
      merged.push(interval)
    } else {
      let newInterval = []
      newInterval.push(Math.min(mergedItem[0], interval[0]))
      newInterval.push(Math.max(mergedItem[1], interval[1]))
      merged = merged.slice(0, merged.length - 1)
      merged.push(newInterval)
    }
  }

  return merged;
};

let sortPairsByStart = function (pair1, pair2) {
  let pair1start = pair1[0]
  let pair2start = pair2[0]

  return pair1start - pair2start
}