import binarySearch from "../src/binary_search";

test("binary search", () => {
    const arr = [-2, -1, 0, 1, 2];

    const result = binarySearch(arr, 1);

    expect(result).toEqual(3);
});
