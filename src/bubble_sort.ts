function bubbleSort(arr: number[]): number[] {
    const newArray = Array.from(arr);

    for (let i = 0; i < newArray.length; ++i) {
        for (let j = 0; j < newArray.length - i - 1; j++) {
            if (newArray[j] > newArray[j + 1]) {
                const tmp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = tmp;
            }
        }
    }

    return newArray;
}

export default bubbleSort;
