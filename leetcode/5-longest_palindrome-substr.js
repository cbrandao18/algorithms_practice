/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    if (s.length < 2) return s;

    let longest = s[0];

    let matrix = new Array(s.length);
    for (let row = 0; row < s.length; row++) {
        let col = row;
        matrix[row] = new Array(s.length);
        matrix[row][col] = true;
    }

    //all two letter substr
    for (let i = 0; i < s.length; i++) {
        let j = i + 1;
        if (s[i] === s[j]) {
            matrix[i][j] = true
            longest = s.substr(i, 2)
        } else {
            matrix[i][j] = false;
        }
    }

    for (let len = 3; len <= s.length; len++) {
        for (let start = 0; start <= s.length - len; start++) {
            let end = start + len - 1;
            console.log(s.substr(start, len))
            if (matrix[start + 1][end - 1] && s[start] === s[end]) {
                //palindrome found
                matrix[start][end] = true;
                if (len > longest.length) {
                    longest = s.substr(start, len)
                }
            }
        }
    }

    return longest
};

console.log(longestPalindrome("ccc"))