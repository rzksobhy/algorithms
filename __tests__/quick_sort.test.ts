import quickSort from "../src/quick_sort";

test("quick sort", () => {
  const arr = [8, 5, 7, 3, 9, 6];
  const result = quickSort(arr);

  expect(result).toEqual([3, 5, 6, 7, 8, 9]);
});
