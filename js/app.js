'use strict';
var allItems = [];
var globalClicks = 0;
var img1;
var img2;
var img3;
// var imageSection = document.getElementById('hide');
// var resultsButton = document.getElementById('resultsButton');
function Item(productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.clickTotal = 0;
  this.timesDisplayed = 0;
  this.percentClick = 0;
  allItems.push(this);
}

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

var imgRandom = function () {
  return Math.floor(Math.random() * allItems.length);
};
//function that makes images appear
var itemRender = function(){
  var itemPic1 = document.getElementById('pic1');
  var itemPic2 = document.getElementById('pic2');
  var itemPic3 = document.getElementById('pic3');

  img1 = imgRandom();
  itemPic1.src = allItems[img1].filePath;
  allItems[img1].timesDisplayed ++;
  img2 = imgRandom();
  if (img1 === img2) {
    img2 = imgRandom();
  }
  itemPic2.src = allItems[img2].filePath;
  allItems[img2].timesDisplayed ++;
  img3 = imgRandom();
  if (img1 === img2 || img2 === img3 || img1 === img3) {
    img3 = imgRandom();
  }
  itemPic3.src = allItems[img3].filePath;
  allItems[img3].timesDisplayed ++;
};
itemRender();

var itemPic1 = document.getElementById('pic1');
var itemPic2 = document.getElementById('pic2');
var itemPic3 = document.getElementById('pic3');


function handleClick(image){
  image.clickTotal++;
  if (globalClicks < 25) {
    globalClicks++;
  }
  else if (globalClicks === 25) {
    itemPic1.removeEventListener('click', handleClick),
    itemPic2.removeEventListener('click', handleClick),
    itemPic3.removeEventListener('click', handleClick);
  }
  console.log('total clicks ' + globalClicks);
  console.log(image.productName + ' has ' + image.clickTotal + ' total votes.');
  itemRender();
}
itemPic1.addEventListener('click', function(){
  handleClick(allItems[img1]);
});
itemPic2.addEventListener('click', function(){
  handleClick(allItems[img2]);
});
itemPic3.addEventListener('click', function(){
  handleClick(allItems[img3]);
});

