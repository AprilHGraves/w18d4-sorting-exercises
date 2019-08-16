function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    const pivot = array[0];
    const leftArr = [];
    const rightArr = [];
    for (let i=1,fin=array.length; i<fin; i++) {
        const ele = array[i];
        if (ele < pivot) {
            leftArr.push(ele);
        } else {
            rightArr.push(ele);
        }
    }
    return quickSort(leftArr).concat([pivot]).concat(quickSort(rightArr))
}


module.exports = {
    quickSort
};