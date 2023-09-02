import solve, { Point } from "../day1/maze";

test("maze solver", () => {
  const maze = [
    "xxxxxxxxxxx x",
    "x         x x",
    "x         x x",
    "x xxxxxxxxx x",
    "x           x",
    "x xxxxxxxxxxx",
  ];

  const start = { x: 11, y: 0 } as Point;
  const end = { x: 1, y: 5 } as Point;

  expect(solve(maze, "x", start, end)).toEqual([
    { x: 11, y: 0 },
    { x: 11, y: 1 },
    { x: 11, y: 2 },
    { x: 11, y: 3 },
    { x: 11, y: 4 },
    { x: 10, y: 4 },
    { x: 9, y: 4 },
    { x: 8, y: 4 },
    { x: 7, y: 4 },
    { x: 6, y: 4 },
    { x: 5, y: 4 },
    { x: 4, y: 4 },
    { x: 3, y: 4 },
    { x: 2, y: 4 },
    { x: 1, y: 4 },
    { x: 1, y: 5 },
  ]);
});
