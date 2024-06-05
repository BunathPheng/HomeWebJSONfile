import { CardComponent } from "../components/CardComponent.js";
let cardRender = document.querySelector("#cardRender");

const BaseUrl = "http://127.0.0.1:5500///data/products.json";

fetch(BaseUrl)
  .then((b) => b.json())
  .then((data) => {
    let products = data.products;
    products.map((p) => (cardRender.innerHTML += CardComponent(p)));
  });
