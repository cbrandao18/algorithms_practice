/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = s.length >= 1 ? 1 : 0;

    for (let i = 0; i < s.length; i++) {
        let currSubStr = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (!currSubStr.includes(s[j])) {
                currSubStr += s[j]
                if (j === s.length - 1 && currSubStr.length > longest) longest = currSubStr.length;
            } else {
                if (currSubStr.length > longest) longest = currSubStr.length;
                break;
            }
        }
    }

    return longest;
};