'use strict';
var productImages = [];
var globalClicks = 0;

function Item(productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.clickTotal = 0;
  this.timesDisplayed = 0;
  productImages.push(this);
}

Item.prototype.percent = function () {
  return (this.clickTotal / this.timesDisplayed).toFixed(2) * 100;

};

console.log(globalClicks);

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

var img1;
var img2;
var img3;

//function that makes images appear
var imageAppear = function () {
  var productpic1 = document.getElementById('pic1');
  var productpic2 = document.getElementById('pic2');
  var productpic3 = document.getElementById('pic3');
  img1 = imgRandom();
  productpic1.src = productImages[img1].filePath;
  productImages[img1].timesDisplayed++;
  img2 = imgRandom();
  while (img1 === img2) {
    img2 = imgRandom();
  }
  productpic2.src = productImages[img2].filePath;
  productImages[img2].timesDisplayed++;
  img3 = imgRandom();
  while (img1 === img2 || img2 === img3 || img3 === img1) {
    img3 = imgRandom();
  }
  productpic3.src = productImages[img3].filePath;
  productImages[img3].timesDisplayed++;
};
imageAppear();

var firstClick = 0;
var secondClick = 0;
var thirdClick = 0;

var productpic1 = document.getElementById('pic1');
var productpic2 = document.getElementById('pic2');
var productpic3 = document.getElementById('pic3');

function handleClickFirst() {
  firstClick += 1;
  globalClicks += 1;
  console.log('First was clicked ' + firstClick + ' times');
  productImages[img1].clickTotal += 1;
  imageAppear();
//   button();
}

function handleClickSecond() {
  secondClick += 1;
  globalClicks += 1;
  console.log('Second was clicked ' + secondClick + ' times');
  productImages[img2].clickTotal += 1;
  imageAppear();
//   button();
}

function handleClickThird() {
  thirdClick += 1;
  globalClicks += 1;
  console.log('Third was clicked ' + thirdClick + ' times');
  productImages[img3].clickTotal += 1;
  imageAppear();
//   button();
}

pic1.addEventListener('click', handleClickFirst);
pic2.addEventListener('click', handleClickSecond);
pic3.addEventListener('click', handleClickThird);

//this function hides the results button until it goes through 5 clicks
// function button() {
//   if (globalClicks < 5) {
//     document.getElementById('resultsButton').style.visibility = 'hidden';
//   } else {
//     document.getElementById('resultsButton').style.visibility = 'visible';
//   }
// }
// button();

//Chart psuedocode
//var productValues = [];
// var survey = [ { productValues[i] and labels} ]
//var context= documet.getElementById('results').getContext('2d');
// var resultsChart = new Chart(context).stuff here(survey, {
//animation,
// });


// var resultsButton = document.getElementById('resultsButton');
// function handleButtonClick() {
//   for (var i = 0; i < productImages.length; i++) {
//     // having handler send the data to a <section> for now, needed to test the button functionality / test the percent method
//     document.getElementById('showData').innerHTML = productImages[i].percent();

//     console.log('this point works');
//   }
// }
// resultsButton.addEventListener('click', handleButtonClick);