function isMonolitic(array) {
    let isNonDecreasing = true;
    let isNonIncresing = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i - 1]) isNonIncresing = false;
        if (array[i] < array[i - 1]) isNonDecreasing = false;
    }
    return isNonDecreasing || isNonIncresing;
};
console.log(isMonolitic([1, 2, 3, 4]))
console.log(isMonolitic([1, 2, 3, -1, 4]))