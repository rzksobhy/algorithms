export type Point = {
  x: number;
  y: number;
};

const dirs: Point[] = [
  { x: 0, y: -1 }, // up
  { x: -1, y: 0 }, // left
  { x: 0, y: 1 }, // down
  { x: 1, y: 0 }, // right
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[],
) {
  // 1. off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // 2. on a wall
  if (maze[curr.y][curr.x] == wall) {
    return false;
  }

  if (curr.x == end.x && curr.y == end.y) {
    path.push(curr);
    return true;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (const { x, y } of dirs) {
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        path,
      )
    ) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}

function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}

export default solve;
