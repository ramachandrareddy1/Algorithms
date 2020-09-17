function validateSeq(array, sequence) {
    let seqId = 0;
    for (let each of array) {
        if (seqId == sequence.length) break;
        if (each == sequence[seqId]) seqId++;

    }
    return sequence.length == seqId;
};

console.log(validateSeq([4, 6, 2, 9, 11], [6, 9, 2, 11]));