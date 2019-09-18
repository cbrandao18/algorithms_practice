/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let paragraphSplit = paragraph.toLowerCase().split(/[!?',;. ]/)
  paragraphSplit = paragraphSplit.filter(word => word != "")


  let wordCount = {}

  for (let word of paragraphSplit) {
    if (!banned.includes(word)) {
      if (wordCount[word]) {
        wordCount[word] += 1
      } else {
        wordCount[word] = 1
      }
    }
  }

  let mostCommonWord = "";
  let countMostCommon = 0;
  for (let key of Object.keys(wordCount)) {
    if (wordCount[key] > countMostCommon) {
      mostCommonWord = key
      countMostCommon = wordCount[key]
    }
  }

  return mostCommonWord
};