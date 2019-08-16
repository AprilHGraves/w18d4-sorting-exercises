function merge(array1, array2) {
    const sorted = [];
    while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
            sorted.push(array1.shift())
        } else {
            sorted.push(array2.shift())
        }
    }
    return [...sorted, ...array1, ...array2]
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }
    const midIdx = Math.floor(array.length/2);
    const leftArr = array.slice(0,midIdx);
    const rightArr = array.slice(midIdx);
    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);
    return merge(sortedLeftArr, sortedRightArr);
}

module.exports = {
    merge,
    mergeSort
};