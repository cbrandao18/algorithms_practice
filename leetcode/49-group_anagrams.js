var groupAnagrams = function (strs) {
  let anagrams = {};

  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');

    if (!anagrams[sortedStr]) {
      anagrams[sortedStr] = [str]
    } else {
      anagrams[sortedStr].push(str)
    }
  }

  return Object.values(anagrams)
};

var isAnagram = function (str1, str2) {
  if (str1.length !== str2.length) return false

  return str1.split('').sort().join('') == str2.split('').sort().join('')
}