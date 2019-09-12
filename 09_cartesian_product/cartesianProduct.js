function cartesianProduct(arr){
  let product = [];

  let initial = arr.shift();
  for (let el of initial){
    product.push([el])
  }
  //product = [ ["gray", "black"] ]


  while (arr.length){
    let nextProduct = [];
    let currentList = arr.shift();
    for (let subarray of product){
      for (let element of currentList){
        // nextProduct.push(subarray.concat([element]))
        nextProduct.push([...subarray, element])
      }
    }
    product = nextProduct;
  }

  return product;
}

console.log(cartesianProduct([["gray", "black"], ["dog", "fox", "rabbit"], ["jumped", "ran", "leaped"]]));

/* [
  ["gray", "dog", "jumped"],
  ["gray", "dog", "ran"]
] */