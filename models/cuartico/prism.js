import * as THREE from "three";
import { colors } from "../config";
const prismGeometry = new THREE.BufferGeometry();
// prettier-ignore
const prismVertices = new Float32Array([
  -0.5, 0.5, 0.64, // 1
   0.5, 0.5, 0.64,  // 2
   0  , 0.8, 0.64, // 3

  -0.5, 0.5, -0.64, // 4
   0.5, 0.5, -0.64, // 5
   0  , 0.8, -0.64, // 6
])
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
prismGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(prismVertices, 3)
);
prismGeometry.setIndex(indices);

prismGeometry.computeVertexNormals();

prismGeometry.clearGroups();
prismGeometry.addGroup(1, 3, 0);
prismGeometry.addGroup(3, 6, 1);
prismGeometry.addGroup(6, 12, 2);
prismGeometry.addGroup(12, 18, 3);
prismGeometry.addGroup(18, 24, 4);
const prismMaterial = [
  new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0,
  }),
  new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0,
  }),
  new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0,
  }),
  new THREE.MeshBasicMaterial({
    color: colors.darkBlue,
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    color: colors.beige,
    side: THREE.DoubleSide,
  }),
];
const meshPrism = new THREE.Mesh(prismGeometry, prismMaterial);
meshPrism.geometry.scale(200, 200, 181.28);
export { meshPrism };
