function smallestDiff(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let idxOne = 0;
    let idxTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];
        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            idxOne++
        } else if (firstNum > secondNum) {
            current = firstNum - secondNum;
            idxTwo++
        } else {
            return [firstNum, secondNum];
        }
        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum]
        }
    }
    return smallestPair
}

console.log(smallestDiff([1, 5, 8, 3, 5], [7, 10, 15, 18]))