'use strict';
//array to store the objects
Item.allItems = [];

//make my constructor function
function Item(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Item.allItems.push(this);
}

//use my constructor function to create new Item instances
new Item('Bag','img/bag.jpg');
new Item('Banana', 'img/banana.jpg');
new Item('Bathroom', 'img/bathroom.jpg');
new Item('Boots', 'img/boots.jpg');
new Item('Breakfast', 'img/breakfast.jpg');
new Item('Bubblegum', 'img/bubblegum.jpg');
new Item('Chair', 'img/chair.jpg');
new Item('Cthulhu', 'img/cthulhu.jpg');
new Item('Dog-duck', 'img/dog-duck.jpg');
new Item('Dragon', 'img/dragon.jpg');
new Item('Pen', 'img/pen.jpg');
new Item('Pet-sweep', 'img/pet-sweep.jpg');
new Item('Tauntaun', 'img/tauntaun.jpg');
new Item('Unicorn', 'img/unicorn.jpg');
new Item('USB', 'img/usb.gif');
new Item('Water-can', 'img/water-can.jpg');
new Item('Wine-glass', 'img/Wine-glass.jpg');

//listener, something to be clicked...events!!!
var imgEl1 = document.getElementById('pic1');
var imgEl2 = document.getElementById('pic2');
var imgEl3 = document.getElementById('pic3');

imgEl1.addEventListener('click', randomItem);
imgEl2.addEventListener('click', randomItem);
imgEl3.addEventListener('click', randomItem);

//randomly display one of the pictures
function randomItem() {
  var randomIndex = Math.floor(Math.random() * Item.allItems.length);
  imgEl1.src = Item.allItems[randomIndex].filepath;
  imgEl2.src = Item.allItems[randomIndex].filepath;
  imgEl3.src = Item.allItems[randomIndex].filepath;
}
randomItem();

// for(var i = 0; i < 3; i++){
//     document.getElementById('pic')

// }
