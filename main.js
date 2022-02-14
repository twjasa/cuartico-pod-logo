import "./style.css";
import { setupScene } from "./scene";
import { cuartico } from "./models/cuartico";
// import elcuartico from "./assets/elcuartico.svg?raw";

const app = document.querySelector("#app");
let { scene, camera } = setupScene(app);
scene.add(cuartico);
console.log(camera.position);
camera.lookAt(cuartico);
