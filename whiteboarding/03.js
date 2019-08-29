// 0.0.0.0 thru 255.255.255.255
// return boolean if valid or not

// "255.256.1.1" => false
// [255, 255, 1, 1]
function valid_ip(str) {
  let ipNums = str.split(".").map(str => Number(str))
  for (let i=0; i<ipNums.length; i++){
    if (ipNums[i] < 0 || ipNums[i] > 255) return false
  }

  return true;
}


//file of ints, sums them, skip the line if it begins with hashtag
function sum_from_file(filename) {

}