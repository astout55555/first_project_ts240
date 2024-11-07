interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  let newPoint: Point = {
    x: (point.x + dx),
    y: (point.y + dy),
  };
  
  return newPoint;
}

let ogPoint = {x: 3, y: 4};

console.log(movePoint(ogPoint, 2, 2));
