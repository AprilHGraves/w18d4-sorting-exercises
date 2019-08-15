function insertionSort(arr) {

    for (let idxOfMover=1,lastidxOfMover=arr.length-1; idxOfMover<=lastidxOfMover; idxOfMover++) {
        let placement=0;
        const numberToMove = arr[idxOfMover];
        for (let idxToCompare=idxOfMover-1; idxToCompare>=0; idxToCompare--) {
            if (numberToMove >= arr[idxToCompare]) {
                placement = idxToCompare + 1;
                break
            }
            arr[idxToCompare+1] = arr[idxToCompare];
        }
        arr[placement] = numberToMove;        
    }
    return arr
}

module.exports = {
    insertionSort
};