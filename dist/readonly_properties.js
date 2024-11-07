"use strict";
function movePoint(point, dx, dy) {
    let newPoint = {
        x: (point.x + dx),
        y: (point.y + dy),
    };
    return newPoint;
}
let ogPoint = { x: 3, y: 4 };
console.log(movePoint(ogPoint, 2, 2));
