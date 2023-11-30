/* eslint-disable */

import "./style.css";

window.onload = function() {
  //write your code here
  let carta = document.querySelector(".card");
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", function() {
    let numeroCarta = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let paloCarta = ["diamonds", "hearts", "clubs", "spades"];
    let numRandom = numeroCarta[Math.floor(Math.random() * 13)];
    let paloRandom = paloCarta[Math.floor(Math.random() * 4)];
    carta.classList.remove("spades", "diamonds", "hearts", "clubs");
    carta.classList.add(`${paloRandom}`);
    carta.innerHTML = numRandom;
  });
};
