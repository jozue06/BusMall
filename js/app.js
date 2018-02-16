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
  var strItems = JSON.stringify(Item.all);
  localStorage.setItem('items', strItems);
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
  for (var i = 0; i < Item.all.length; i++) {
    data.push(Item.all[i].votes);
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Item.names,
        datasets: [{
          label: 'Votes',
          data: data,
          backgroundColor: colors,
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Results'
        },
        scales: {
          yAxes: [{
            ticks: {
              max: 8,
              min: 0,
              stepSize: 1,
            }
          }]
        }
      }
    });
  }
}

Item.container.addEventListener('click', handleClick);
renderItems();
var data = [];
var colors = ['#ffffe4', '#fffcd7','#fff7c7','#fff1b3','#ffe99d','#ffdf85','#ffd36d','#fec456','#feb442','#fca330','#f99022','#f47e18','#ec6c10','#e05c0b','#d14e08','#bd4106','#a73705','#902f04','#792904','#662404'];











//@jm6




/* ********************************************** */


//****DATA****//

// var allAvocados = [];

// //****CONSTRUCTOR & INSTANCES****//

// function Avocado(name, path, shown, votes) {
//   this.name = name;
//   this.path = path;
//   this.timesShown = shown;
//   this.votes = votes;
//   allAvocados.push(this);
// }

// function instantiateAvocados() {
//   var hand = new Avocado("hand", "img/avocado-hand.png", 0, 0);
//   var cartoon = new Avocado("cartoon", "img/avoCartoon.jpg", 0, 0);
//   var hass = new Avocado("hass", "img/hass.jpg", 0, 0);
//   var ripe = new Avocado("ripe", "img/ripe-avocado.png", 0, 0);
//   var bird = new Avocado("bird", "img/avocado-bird.jpg", 0, 0);
// }



//****IMAGE & VOTING FUNCTIONS****//

// var tracker = {
//   chartLabels: [],
//   chartVotes: [],
//   img1: document.getElementsByClassName("img1")[0],
//   img2: document.getElementsByClassName("img2")[0],
//   displaySection: document.getElementById("display"),
//   resultsButton: document.getElementById("button"),

//   randomIndex: function(arr) {
//     return Math.floor(Math.random() * arr.length);
//   },

//   getIndices: function(arr) {
//     var ind1 = this.randomIndex(arr);
//     var ind2 = this.randomIndex(arr);

//     while (ind2 === ind1) {
//       ind2 = this.randomIndex(arr);
//     }

//     return [ind1, ind2];
//   },

//   displayPics: function() {
//     var indices = this.getIndices(allAvocados);
//     var leftImg = allAvocados[indices[0]];
//     var rightImg = allAvocados[indices[1]];

//     this.img1.src = leftImg.path;
//     this.img2.src = rightImg.path;

//     this.img1.id = leftImg.name;
//     this.img2.id = rightImg.name;

//     leftImg.timesShown += 1;
//     rightImg.timesShown += 1;
//   },

//   tallyVote: function(id) {
//     for (var avo of allAvocados) {
//       if (avo.name === id) {
//         avo.votes += 1;
//       }
//     }
//     var strAvocados = JSON.stringify(allAvocados);
//     localStorage.setItem("avocados", strAvocados);
//   },

//   //****CHART FUNCTIONS****//

//   updateChartData: function() {
//     for (var i = 0; i < allAvocados.length; i++) {
//       this.chartLabels[i] = allAvocados[i].name;
//       this.chartVotes[i] = allAvocados[i].votes;
//     }
//   },

//   makeChart: function() {
//     var canvas = document.getElementById("canvas");
//     var ctx = canvas.getContext("2d");

//     tracker.updateChartData();

//     var chart = new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: tracker.chartLabels,
//         datasets: [
//           {
//             label: "Votes",
//             backgroundColor: "rgba(255,99,132,0.2)",
//             borderColor: "rgba(255,99,132,1)",
//             borderWidth: 1,
//             hoverBackgroundColor: "rgba(255,99,132,0.4)",
//             hoverBorderColor: "rgba(255,99,132,1)",
//             data: tracker.chartVotes
//           }
//         ]
//       }
//     });
//   }
// };

// //****EVENT LISTENERS****//

// tracker.displaySection.addEventListener("click", function(event) {
//   if (event.target.id !== "display") {
//     tracker.tallyVote(event.target.id);
//     tracker.displayPics();
//   }
// });

// tracker.resultsButton.addEventListener("click", tracker.makeChart);

// //****GET AVOCADOS FROM LOCALSTORAGE****//

// (function getLocalStorage() {
//   if (localStorage.avocados) {
//     var strAvocados = localStorage.getItem("avocados");
//     var avocados = JSON.parse(strAvocados);
//     console.log(avocados);
//     for (var avo of avocados) {
//       console.log(avo);
//       var newAvo = new Avocado(avo.name, avo.path, avo.timesShown, avo.votes);
//     }
//   } else {
//     instantiateAvocados();
//   }
// })();

// //****SHOW FIRST PICS****//

// tracker.displayPics();