const width = 217;
const height = 212;
setDocDimensions(width, height);


function drawCircle(centerX, centerY, radius) {
  const numSides = 200; // change this number for precision of circles 
  const points = [];

  for (let i = 0; i < numSides; i++) {
    const angle = (i / numSides) * Math.PI * 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push([x, y]);
  }

  drawLines([points]); 
}


function drawSquare(x, y, size) {
  const squarePoints = [
    [x, y],
    [x + size, y],
    [x + size, y + size],
    [x, y + size],[x,y]
  ];

  drawLines([squarePoints], { fill:'white' });
}
function createRandomsq(numDots) {
  for (let i = 0; i < numDots; i++) {
    const x = bt.rand() * 200;
    const y = bt.rand() * 200;
    const size = bt.rand() * 15;
    drawSquare(x,y,size,{fill:"black"})
  }
}
function createRandomc(numDots) {
  for (let i = 0; i < numDots; i++) {
    const x = bt.rand() * 200;
    const y = bt.rand() * 200;
    const radius = bt.rand() * 15;
    drawCircle(x, y, radius, { fill: 'black' });
  }
}

createRandomc(58);
createRandomsq(150);
