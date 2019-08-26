function merge(array1, array2) {
    let merged = [];

    while (array1.length || array2.length){
        let num1 = array1.length ? array1[0] : Infinity
        let num2 = array2.length ? array2[0] : Infinity

        let smaller;
        if (num1 < num2){
            smaller = array1.shift()
        } else {
            smaller = array2.shift();
        }
        merged.push(smaller)
    }

    return merged;
}

function mergeSort(array) {
    if (array.length < 2) return array;

    let midIndex = Math.floor(array.length/2);
    let left = array.slice(0, midIndex);
    let right = array.slice(midIndex);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);

}

module.exports = {
    merge,
    mergeSort
};