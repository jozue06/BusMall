'use strict';

Item.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Item.all = [];
Item.container = document.getElementById('container');
Item.viewed = [];

Item.pics = [document.getElementById('pic1'),
  document.getElementById('pic2'),
  document.getElementById('pic3')];

Item.totals = document.getElementById('totals');
Item.totalClicks = 0;

function Item(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Item.all.push(this);
}
for(var i = 0; i < Item.names.length; i++) {
  new Item(Item.names[i]);
}
function makeRandom() {
  return Math.floor(Math.random() * Item.names.length);
}

function renderItems() {
  var showing = [];
  showing[0] = makeRandom();
  while (Item.viewed.indexOf(showing[0]) !== -1) {
    showing[0] = makeRandom();
  }
  showing[1] = makeRandom();
  while(showing[0] === showing[1] || Item.viewed.indexOf(showing[1]) !== -1) {
    showing[1] = makeRandom();
  }
  showing[2] = makeRandom();
  while(showing[0] === showing[2] || showing[1] === showing[2] || Item.viewed.indexOf(showing[2]) !== -1) {
    showing[2] = makeRandom();
  }

  for(var i = 0; i < 3; i++) {
    Item.pics[i].src = Item.all[showing[i]].path;
    Item.pics[i].id = Item.all[showing[i]].name;
    Item.all[showing[i]].views += 1;
    Item.viewed[i] = showing[i];
  }
}

function handleClick(event) {
  if(Item.totalClicks > 24) {
    Item.container.removeEventListener('click', handleClick);
    showtotals();
  }
  if (event.target.id === 'container') {
    return alert('Please make a selection');
  }
  Item.totalClicks += 1;
  for( var i = 0; i < Item.names.length; i++) {
    if(event.target.id === Item.all[i].name) {
      Item.all[i].votes += 1;
    }
  }
  renderItems();
}

function showtotals() {
  var ctx = document.getElementById('chart').getContext('2d');
 
  for(var i = 0; i < Item.all.length; i++) {
    data.push(Item.all[i].votes);
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Item.names,
        datasets: [{
          label: Item.all ,
          data: data,
          backgroundColor: labelColors
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });    
    // var liEl = document.createElement('li');
    // liEl.textContent = ' ' + Item.all[i].name + ' has ' + Item.all[i].votes + ' votes in ' + Item.all[i].views + ' views. ';
    // Item.totals.appendChild(liEl);
  }
}

Item.container.addEventListener('click', handleClick);
renderItems();

var data = [];
//this is the name for each product
var labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];