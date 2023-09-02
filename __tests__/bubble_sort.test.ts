import bubbleSort from "../src/bubble_sort";

test("binary search", () => {
  const arr = [1, 0, 2, -1];

  const result = bubbleSort(arr);

  expect(result).toEqual([-1, 0, 1, 2]);
});
