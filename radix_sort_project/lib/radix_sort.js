function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null
    }
    if (arr.length <= 1) {
        return arr
    }
    const maxIntLength = getMaxDigits(arr);
    for (let place=0; place<maxIntLength; place++) {
        let buckets = [[], [], [], [], [], [], [], [], [], []];
        
        for (let numIdx=0; numIdx<arr.length; numIdx++) {
            const num = arr[numIdx];
            const digitFromPlace = getDigitFrom(num, place);
            buckets[digitFromPlace].push(num);
        }
        arr = [];
        arr = arr.concat(...buckets);

    }
    return arr
}

const getDigitFrom = (num, place) => (Math.floor(Math.abs(num) / Math.pow(10, place)) % 10);

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        maxNum = nums[i] > maxNum ? nums[i]:maxNum;
    }
    return getIntLength(maxNum);
}

module.exports = {
    radixSort
};