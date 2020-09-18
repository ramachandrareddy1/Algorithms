function threeNumSum(array, targetSum) {
    array.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum > targetSum) {
                right--;
            } else {
                left++
            }
        }
    }
    return triplets;
}

console.log(threeNumSum([1, 2, 7, 6, 9, 3, 2], 10))