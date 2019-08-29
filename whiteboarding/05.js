// returns an array with 10 closest subsequent years where
// the first two digits summed with last 2, equal middle 2
// 1978 => 19 + 78 = 97
// 2307 => 23 + 07 = 30
function silly_years(year) {
  let result = [];

  while (result.length < 10){
    year += 1;
    
    let digits = year.toString().split(''); // ['1', '9', '7', '8']
    let firstNumStr = digits[0] + digits[1] //'19'
    let firstNum = Number(firstNumStr) //19

    let lastNumStr = digits[2] + digits[3]; //'78'
    let lastNum = Number(lastNumStr); //78

    let midNumStr = digits[1] + digits[2]; //'97'
    let midNum = Number(midNumStr);//97

    if (firstNum + lastNum === midNum) result.push(year)
  }

  return result;
}

// return the pairs of numbers that sum to the target
// returning the pairs in [min, max]
function pair_sum(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j<arr.length; j++){
      if (arr[i] + arr[j] === target) {
        if (arr[i] < arr[j]) {
          result.push([arr[i], arr[j]])
        } else {
          result.push([arr[j], arr[i]])
        }
      }
    }
  }

  return result;
}