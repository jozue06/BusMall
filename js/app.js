'use strict';
//array to store the objects
var allItems = [];
var itemsShown = [];
var globalClicks = 0;

//constructor function
function Item(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesClicked = 0;
  allItems.push(this);
}

//constructor function variables
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

//event listeners
var imgEl1 = document.getElementById('pic1');
var imgEl2 = document.getElementById('pic2');
var imgEl3 = document.getElementById('pic3');

imgEl1.addEventListener('click', onClick);
imgEl2.addEventListener('click', onClick);
imgEl3.addEventListener('click', onClick);

// onclick fire multiple functions
function onClick() {
  // for( var i = 0; i < itemsShown.length; i++){
  //   itemsShown[i].timesClicked+1;
  // console.log(itemsShown);
  randomItem();
  // }
}




//randomly display three pictures, check if any of the pictures are duplicate, log global click totals.
function randomItem() {
  globalClicks++;
  // console.log(globalClicks);
  var randomIndex1 = Math.floor(Math.random() * allItems.length);
  var randomIndex2 = Math.floor(Math.random() * allItems.length);
  var randomIndex3 = Math.floor(Math.random() * allItems.length);
  imgEl1.src = allItems[randomIndex1].filepath;
  imgEl2.src = allItems[randomIndex2].filepath;
  imgEl3.src = allItems[randomIndex3].filepath;
  // itemsShown.push(imgEl1.name);
  console.log(imgEl1.timesClicked);

  if (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3){
    globalClicks--;
    randomItem();
  }
}

randomItem();