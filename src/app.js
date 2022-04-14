/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generadorDeIconos());
  document.querySelector(".number").innerHTML = generadorDeNumeros();
  let suit = generadorDeSuits();
  document.querySelector(".top-suit").innerHTML = suit;
  document.querySelector(".bottom-suit").innerHTML = suit;
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

// crear condicional iconos - clases

let generadorDeSuits = () => {
  let iconos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let indiceI = ~~(Math.random() * iconos.length);
  return iconos[indiceI];
  let generadorDeIconos = () => {
    let iconos = ["black", "red"];
    if iconos
  };
};

