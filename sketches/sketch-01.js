const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
  /*
  dimensions:  'A4',
  pixelsPerInch: 300,
  orientation: 'landscape'
  */
};

/*
Favicon Colors
Pink
#FA8089
#FA4A58
#F82F40

Green
#A2E540
#8CC636
#82B633
*/

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#111111';
    context.strokeStyle = '#FA4A58';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * .005;
    
    const w = width * .10;
    const h = height * .10;
    const gap = width * .03;
    const ix = width * .17;
    const iy = height * .17;

    const off = width * .02;
    let x, y;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;
      
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
      
        //if (i > 0 && i < 4) {
        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off/2, y + off/2, w - off, h - off);
          context.stroke();
        
          context.beginPath();
          context.rect(x + off, y + off, w - off*2, h - off*2);
          context.stroke();
          /*
          // Circles //
          context.beginPath();
          context.arc(x + off*2, y + 30, w - off*2, 0, Math.PI * 2);
          //context.stroke();

          context.beginPath();
          context.arc(x + off*2, y + off*2, w - off*2, 0, Math.PI * 2);
          //context.stroke();
          */
        }
      
        // Random //
        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off/2, y + off/2, w - off, h - off);
          context.stroke();
          /*
          // Circles //
          context.beginPath();
          context.arc(x + off, y + off, w - off, 0, Math.PI * 2);
          //context.stroke();

          context.beginPath();
          context.arc(x + off, y + off, w - off, 0, Math.PI * 2);
          //context.stroke();
          */
        }
        // Random //
      }
    }
  };
};

canvasSketch(sketch, settings);
