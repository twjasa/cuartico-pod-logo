import * as THREE from "three";

import "./style.css";
import { setupScene } from "./scene";
import { meshBox, meshPrism, meshLid, triangleWall } from "./models/cuartico";
import { changeTransparency } from "./utils";
// import elcuartico from "./assets/elcuartico.svg?raw";

const app = document.querySelector("#app");
let { scene, camera, controls } = setupScene(app);
const cuartico = new THREE.Group();
cuartico.add(meshPrism, meshBox, meshLid, triangleWall);
controls.addEventListener("change", () => {
  if (camera.position.z > 0 && !meshBox.material[4].transparent) {
    //looking front
    changeTransparency(meshBox, 4, true);
    changeTransparency(meshBox, 1, false);
    changeTransparency(meshPrism, 3, false);
    changeTransparency(triangleWall, 1, true);
    changeTransparency(triangleWall, 2, true);
  }
  if (camera.position.z < 0 && meshBox.material[4].transparent) {
    //looking back
    changeTransparency(meshBox, 4, false);
    changeTransparency(meshBox, 1, true);
    changeTransparency(meshPrism, 3, true);
    changeTransparency(triangleWall, 1, false);
    changeTransparency(triangleWall, 2, false);
  }
});
console.log(meshPrism.material);
scene.add(cuartico);
camera.lookAt(cuartico);
