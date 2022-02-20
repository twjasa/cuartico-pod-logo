import * as THREE from "three";
import { colors } from "../config";

const geometry = new THREE.BufferGeometry();
// prettier-ignore
const vertices = new Float32Array([
  -0.5, 0.5, 0.64, 
   0.5, 0.5, 0.64,  
   0  , 0.8, 0.64, 
]);

geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
const material = new THREE.MeshBasicMaterial({
  color: colors.beige,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0,
});
const triangleWall = new THREE.Mesh(geometry, material);
triangleWall.geometry.scale(200, 200, 181.21);

export { triangleWall };
