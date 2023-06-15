import "./style.css";
import buttonStyles from "./button.module.css";
import img from "./Vite-image.webp";

import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

import { user } from "./data.json";

// const modules = import.meta.glob("./modules/*.js");
const modules = import.meta.glob("./modules/*.js");

import suma from './suma.ts'

console.log(`suma 2+3 = ${suma(2, 3)}`)

for (const path in modules) {
  modules[path]()
    .then((module) => {
      module.load();
    })
    .catch((err) => {
      console.log(err);
    });
}

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <button id="btn"> Click! </button>
  <img id="img" />
  <pre>${JSON.stringify(user)}</pre>
`;

document.getElementById("btn").className = buttonStyles.btn;

const imagen = document.getElementById("img");

imagen.src = img;

setupCounter(document.querySelector("#counter"));
