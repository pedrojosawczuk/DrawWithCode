let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.strokeStyle = '#111111';
//context.fillRect(100, 100, 400, 400);

//Variables and Functions //
context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 600, 600);
//context.stroke();

context.beginPath();
context.arc(400, 400, 200, 0, Math.PI * 2);
//context.stroke();
//Variables and Functions //

// Arrays and Loops //
const width = 60;
const height = 60;
const gap = 20;
let x, y;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    x = 200 + (width + gap) * i;
    y = 200 + (height + gap) * j;
  
    context.beginPath();
    context.rect(x, y, width, height);
    //context.stroke();

    context.beginPath();
    context.rect(x + 8, y + 8, width - 16, height - 16);
    //context.stroke();

    context.beginPath();
    context.rect(x + 16, y + 16, width - 32, height - 32);
    //context.stroke();
    
    context.beginPath();
    context.arc(x + 30, y + 30, width - 40, 0, Math.PI * 2);
    //context.stroke();
    
    context.beginPath();
    context.arc(x + 30, y + 30, width - 50, 0, Math.PI * 2);
    //context.stroke();
  }
}
// Arrays and Loops //

// Conditions //
//const width = 60;
//const height = 60;
//const gap = 20;
//let x, y;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    x = 200 + (width + gap) * i;
    y = 200 + (height + gap) * j;
  
    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke();

    if (i > 0 && i < 4) {
      context.beginPath();
      context.rect(x + 8, y + 8, width - 16, height - 16);
      context.stroke();

      context.beginPath();
      context.rect(x + 16, y + 16, width - 32, height - 32);
      //context.stroke();
      
      context.beginPath();
      context.arc(x + 30, y + 30, width - 40, 0, Math.PI * 2);
      //context.stroke();
      
      context.beginPath();
      context.arc(x + 30, y + 30, width - 50, 0, Math.PI * 2);
      //context.stroke();
    }

    // Random //
    if (Math.random() > 0.5) {
      context.beginPath();
      context.rect(x + 16, y + 16, width - 32, height - 32);
      context.stroke();
      
      context.beginPath();
      context.arc(x + 30, y + 30, width - 40, 0, Math.PI * 2);
      //context.stroke();
      
      context.beginPath();
      context.arc(x + 30, y + 30, width - 50, 0, Math.PI * 2);
      //context.stroke();
    }
    // Random //
  }
}
// Conditions //


let year = 2042;
let nextyear = year + 1;

let dinner = 'SALAD';
let sentence = 'Tonight, dinner will be ' + dinner;

function saySomething(param) {
  console.log(param);
}

saySomething(sentence);

function add(a, b) {
  return a + b;
}

let result = add(5, 7);
console.log(result);

let multiply = (a, b) => {
  return a * b;
}

console.log(multiply(5, 7));

let years = [];
let menu = ['starter', 'main', 'dessert', 'drinks'];

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for (let i = 0; i < 10; i++) {
  years.push(2040 + i);
}

console.log(years);

const gravity = 9.81;
let velocity = 0.0;

// More Loops //
menu.forEach(item => {
  console.log(item);
})
// More Loops //
