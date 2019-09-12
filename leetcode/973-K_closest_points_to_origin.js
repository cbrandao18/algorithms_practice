/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  return points.sort((p1, p2) => getDistance(p1) - getDistance(p2)).slice(0, K)
};

var getDistance = function (point) {
  return Math.sqrt((point[0] ** 2 + point[1] ** 2))
}