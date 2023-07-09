// Javascript this keyword
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Asynchronous JavaScript (bất đồng bộ)
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

function disDate() {
document.querySelector('#date').innerHTML = new Date();
}

// onchange
function uppCase() {
let x = document.getElementById('input');
x.value = x.value.toUpperCase();
}

// Event `onmouseover` va `onmouseout`
function myOver(obj) {
obj.innerHTML = "Thanks you";
}

function myOut(obj) {
obj.innerHTML = 'Hover Text';
}

document.getElementById('demo-2').innerHTML = "Screen width is " + screen.width;