function countingSort(arr, max) {
    const resultArray = [];
    const countArray = new Array(max + 1).fill(0);
    for (let i=0; i<arr.length; i++) {
        countArray[arr[i]] += 1;
    }
    for (let i=0; i<countArray.length; i++) {
        const qty = countArray[i];
        for (let iter=0; iter<qty; iter++) {
            resultArray.push(i);
        }
    }
    return resultArray;
}


module.exports = {
    countingSort
};