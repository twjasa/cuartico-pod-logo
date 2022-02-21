import * as THREE from "three";
import { colors } from "../config";

const geometry = new THREE.BufferGeometry();
// prettier-ignore
const vertices = new Float32Array([
  -0.5, 0.5, 0.64, 
   0.5, 0.5, 0.64,  
   0  , 0.8, 0.64, 
   -0.5, 0.5, -0.64, 
   0.5, 0.5, -0.64, 
   0  , 0.8, -0.64, 
]);
// prettier-ignore
const indices = [
  0, 1, 2, // Top
  5, 4, 3, // Bottom
  3, 1, 0, // Back
  1, 3, 4, // Back
  0, 2, 3, // Left
  5, 3, 2, // Left
  4, 2, 1, // Right
  2, 4, 5, // Right
]

geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
geometry.setIndex(indices);

geometry.computeVertexNormals();
geometry.clearGroups();
geometry.addGroup(1, 3, 0);
geometry.addGroup(3, 6, 1);
geometry.addGroup(6, 12, 2);
geometry.addGroup(12, 18, 3);
geometry.addGroup(18, 24, 4);
const material = [
  new THREE.MeshBasicMaterial({
    //front
    color: colors.darkBlue,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
  }),
  new THREE.MeshLambertMaterial({
    //back
    color: colors.white,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
  }),
  new THREE.MeshBasicMaterial({
    //base
    color: colors.darkBlue,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
  }),
  new THREE.MeshBasicMaterial({
    //left
    color: colors.darkBlue,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
  }),
  new THREE.MeshBasicMaterial({
    //right
    color: colors.darkBlue,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
  }),
];
const triangleWall = new THREE.Mesh(geometry, material);
triangleWall.geometry.scale(199.9, 199.9, 6);
triangleWall.position.set(0, 0, 112);
export { triangleWall };
