let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.strokeStyle = '#111111';
//context.fillRect(100, 100, 400, 400);

context.lineWidth = 10;
context.beginPath();
context.rect(100, 100, 600, 600);
context.stroke();

context.beginPath();
context.arc(400, 400, 200, 0, Math.PI * 2);
context.stroke();


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
