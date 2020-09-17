function TwoNumberSum(array, targetNum) {
    let nums = {};
    for (let i = 0; i < array.length; i++) {
        let requiredNum = targetNum - array[i];
        if (requiredNum in nums) {
            return [requiredNum, array[i]]
        } else {
            nums[array[i]] = true;
        }

    }
    return [];

}

console.log(TwoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], -5))