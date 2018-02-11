'use strict';
var productImages = [];
var globalClicks = 0;
var img1;
var img2;
var img3;
var productpic1 = document.getElementById('pic1');
var productpic2 = document.getElementById('pic2');
var productpic3 = document.getElementById('pic3');
// var imageSection = document.getElementById('hide');
// var resultsButton = document.getElementById('resultsButton');

function Item(productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.clickTotal = 0;
  this.timesDisplayed = 0;
  this.percentClick = 0;
  productImages.push(this);
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
  return Math.floor(Math.random() * productImages.length);
};
//function that makes images appear
var imageAppear = function(){
  var productpic1 = document.getElementById('pic1');
  var productpic2 = document.getElementById('pic2');
  var productpic3 = document.getElementById('pic3');
  img1 = imgRandom();
  productpic1.src = productImages[img1].filePath;
  productImages[img1].timesDisplayed ++;
  img2 = imgRandom();
  if (img1 === img2) {
    img2 = imgRandom();
  }
  productpic2.src = productImages[img2].filePath;
  productImages[img2].timesDisplayed ++;
  img3 = imgRandom();
  if (img1 === img2 || img2 === img3 || img3 === img1) {
    img3 = imgRandom();
  }
  productpic3.src = productImages[img3].filePath;
  productImages[img3].timesDisplayed ++;
};
imageAppear();


function handleClick(image){
  image.clickTotal++;
  globalClicks++;
  console.log('total clicks ' + globalClicks);
  console.log(image.productName + ' has ' + image.clickTotal + ' total votes.');
  imageAppear();
}
pic1.addEventListener('click', function(){
  handleClick(productImages[img1]);
});
pic2.addEventListener('click', function(){
  handleClick(productImages[img2]);
});
pic3.addEventListener('click', function(){
  handleClick(productImages[img3]);
});
