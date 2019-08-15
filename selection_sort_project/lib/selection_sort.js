function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr
}

function selectionSort(arr) {

    for (let i=0,fin=arr.length; i<fin; i++) {
        let smallestIdx = i;
        for (let j=i+1,fin2=arr.length; j<fin2; j++) {
            if (arr[j] < arr[smallestIdx]) {
                smallestIdx = j;
            }
        }
        swap(arr, i, smallestIdx);
    }
    return arr
}

module.exports = {
    selectionSort,
    swap
};