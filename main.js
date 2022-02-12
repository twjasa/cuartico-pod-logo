import "./style.css";
import { setupScene } from "./scene";
import { addSVGtoScene } from "./svg";
// import elcuartico from "./assets/elcuartico.svg?raw";

const app = document.querySelector("#app");
let scene = setupScene(app);
addSVGtoScene(scene, "./assets/elcuartico.svg");
scene.add(object);
