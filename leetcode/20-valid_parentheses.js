/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  if (s.length % 2 !== 0) return false

  let pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  let stack = [];

  for (char of s) {

    if (Object.values(pairs).includes(char)) { //opening bracket
      stack.push(char)
    } else { //closing bracket
      let openingPair = pairs[char];
      if (stack[stack.length - 1] === openingPair) {
        stack = stack.slice(0, stack.length - 1)
      }
    }
  }

  return stack.length === 0

};