import * as THREE from "three";
import { meshBox } from "./box";
import { meshPrism } from "./prism";
import { meshLid } from "./lid";

const cuartico = new THREE.Group();
cuartico.add(meshBox, meshPrism, meshLid);

export { cuartico };
