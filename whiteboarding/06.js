//find intersection of both sets
function fast_intersection(arr1, arr2){

  let result = [];
  let arr1Set = new Set(arr1);

  for (let i = 0; i < arr2.length; i++){
    if (arr1Set.has(arr2[i])) result.push(arr2[i])
  }
  return result;
}


//return an array with all the common subsets of both
function common_subsets(arr1, arr2){
  
}