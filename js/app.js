'use strict';

var allItems = [];
var globalClicks = 0;
var img1;
var img2;
var img3;
var itemDisplayed = [];
var itemPic1 = document.getElementById('pic1');
var itemPic2 = document.getElementById('pic2');
var itemPic3 = document.getElementById('pic3');
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
function itemRender(){

  if (globalClicks <= 25) {
    removeDummy();
  }
  var currentlyShowing = [];
  //make left image unique
  currentlyShowing[0] = imgRandom();
  while (itemDisplayed.indexOf(currentlyShowing[0]) !== -1) {
    console.error('Duplicate, or in prior view! Re run!');
    currentlyShowing[0] = imgRandom();
  }
  //make center image unique
  currentlyShowing[1] = imgRandom();
  while(currentlyShowing[0] === currentlyShowing[1] || itemDisplayed.indexOf(currentlyShowing[1]) !== -1) {
    console.error('Duplicate at center, or in prior view! Re run!');
    currentlyShowing[1] = imgRandom();
  }
  //make right image unique
  currentlyShowing[2] = imgRandom();
  while(currentlyShowing[0] === currentlyShowing[2] || currentlyShowing[1] === currentlyShowing[2] || itemDisplayed.indexOf(currentlyShowing[2]) !== -1) {
    console.error('Duplicate at right! Re run it.');
    currentlyShowing[2] = imgRandom();
  }
  // img1 = imgRandom();
  // img2 = imgRandom();
  // img3 = imgRandom();
  itemPic1.src = allItems[img1].filePath;
  itemPic2.src = allItems[img2].filePath;
  itemPic3.src = allItems[img3].filePath;
  // allItems[img1].timesDisplayed ++;
  // allItems[img2].timesDisplayed ++;
  // allItems[img3].timesDisplayed ++;
  // console.log('before function ' + itemDisplayed);
  // itemDisplayed.push(img1, img2, img3);
  // while (itemDisplayed[0] === img1 || itemDisplayed[1] === img2 || itemDisplayed[2] === img3 || itemDisplayed[0] === img3 || img1 === img2 || img2 === img3 || img1 === img3){
  //   itemRender();
  // }
  // console.log('outside function ' + itemDisplayed);
}
itemRender();

function handleClick(image){
  itemDisplayed = [];
  image.clickTotal++;
  globalClicks++;
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


function removeDummy() {
  var container = document.getElementById('container');
  container.removeChild(itemPic1);
  container.removeChild(itemPic2);
  container.removeChild(itemPic3);
}