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
    "Grouper Fish",
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