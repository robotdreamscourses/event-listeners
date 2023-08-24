// document.getElementById
let headline = document.getElementById('title');
console.log(headline);


// document.getElementsByClassName
let listV1 = document.getElementsByClassName('list');
console.log(listV1);


// document.querySelector
let titleClass = document.querySelector('.headline');
console.log(titleClass);

let titleId = document.querySelector('#title');
console.log(titleId);

let titleAttr = document.querySelector('[data-title]');
console.log(titleAttr);

let titleEl = document.querySelector('h1');
console.log(titleEl);


// document.querySelectorAll
let listV2 = document.querySelectorAll('.list');
// document.querySelectorAll('.list');
// document.querySelectorAll('li');
// document.querySelectorAll('[data-list]');
console.log(listV2);


// foreach
listV2.forEach(function (item) {
    console.log(item);
    item.style.color = 'red';
});


// adding style
let bigTitle = document.querySelector('h1');
headline.style.color = 'purple';
console.log(bigTitle);


// add event listener
let clickMeBtn = document.querySelector('[data-btn]');
console.log(clickMeBtn);

clickMeBtn.addEventListener('click', function () {
  this.innerHTML = 'Clicked!';
});

// add event listener - named function
let todoList = document.querySelectorAll('.list');

const handleClick = function () {
  this.style.color = 'blue';
  console.log('🌈', this);
};

todoList.forEach(function(item) {
  item.addEventListener('click', handleClick);
});

// remove event listener
setTimeout(function() {
  todoList.forEach(function (item) {
    item.removeEventListener('click', handleClick);
    item.style.color = 'black';
  });
}, 8000);



let continueBtn = document.querySelector('[data-continue-btn]');

const handleBtnClick = function () {
  this.innerHTML = 'Clicked';
  // this.classList.add('btn-clicked');
  // this.classList.remove('deleteMe');
  this.classList.toggle('btn-clicked');

}

continueBtn.addEventListener('click', handleBtnClick);
