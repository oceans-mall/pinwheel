// import prawns from '../assets/prawns.jpg'
// import shrimps from '../assets/shrimps.jpg'
// import lobsters from '../assets/lobsters.jpg'
// import catfish from '../assets/cassava.jpg'
import cassava from "../assets/cassava.jpg"

// //dummy data
// export const services = [
//     {
//       id: 1,
//       title: "SELL TO US",
//       img: require("../assets/fish_market.webp"),
//     },
//     {
//       id: 2,
//       title: "BUY FROM US",
//       img: require("../assets/prawns.jpg"),
//     },
//     {
//       id: 3,
//       title: "MARKET INFO",
//       img: require("../assets/info.jpg"),
//     },
//     {
//       id: 4,
//       title: "WEATHER INFO",
//       img: require("../assets/dribbble.gif"),
//     },
//   ];

 export const fish = [
  "- - Select - -",
    "Shrimps",
    "Prawns",
    "Octopus",
    "Squid",
    "Cassava Fish",
    "Lobsters",
    "Grouper Whole",
    "Fillet",
    "Tilapia",
    "Clams",
    "Red Fish",
    "Others",
  ];
  export const source = [
    "- - Select - -",
    "Lagoon",
    "Lake",
    "River",
    "Sea",
    "Others",
  ];
  
  export const prices = [
    {
      id:1,
      type: "Prawns",
      price:60
    },
    {
      id:2,
      type: "Lobsters",
      price:70
    },
    {
      id:3,
      type: "Squid",
      price:80
    },
    {
      id:4,
      type: "Shrimps",
      price:60
    },
    {
      id:5,
      type: "Fillet",
      price:60
    },
    {
      id:6,
      type: "Tilapia",
      price:30
    },
    {
      id:7,
      type: "Cassava Fish",
      price:60
    },
    {
      id:8,
      type: "Grouper Whole",
      price:60
    },
    {
      id:9,
      type: "Octopus",
      price:60
    },

  ]
  export const trades =[
    {
      id: 1,
      fishType:'Prawns',
      quantity:10,
      price:50,
      img:cassava
    },
    {
      id: 2,
      fishType:'Shrimps',
      quantity:12,
      price:70,
      img:cassava
    },
    {
      id: 3,
      fishType:'Lobsters',
      quantity:5,
      price: 30,
      img:cassava
    },
    {
      id: 4,
      fishType:'Octopus',
      quantity:10,
      price:50,
      img:cassava
    },
  ]