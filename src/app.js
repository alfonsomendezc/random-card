/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generadorDeIconos());
  document.querySelector(".number").innerHTML = generadorDeNumeros();
  document.querySelector(".top-suit").innerHTML = generadorDeSuits();
};

let generadorDeNumeros = () => {
  let numbers = [
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
  let indiceN = ~~(Math.random() * numbers.length);
  return numbers[indiceN];
};

let generadorDeIconos = () => {
  let iconos = ["spades", "clubs", "hearts", "diamonds"];
  let indiceI = ~~(Math.random() * iconos.length);
  return iconos[indiceI];
};

let generadorDeSuits = () => {
  let iconos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let indiceI = ~~(Math.random() * iconos.length);
  return iconos[indiceI];
};
