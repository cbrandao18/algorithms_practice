/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let merged = [];
    while (nums1.length || nums2.length) {
        let num1 = nums1.length ? nums1[0] : Infinity
        let num2 = nums2.length ? nums2[0] : Infinity

        let smaller;
        if (num1 < num2) {
            smaller = nums1.shift()
        } else {
            smaller = nums2.shift()
        }

        merged.push(smaller);
    }

    let midIndex = Math.floor(merged.length / 2);
    if (merged.length % 2 !== 0) {
        return merged[midIndex]
    } else {
        return ((merged[midIndex] + merged[midIndex - 1]) / 2)
    }


};