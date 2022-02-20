import * as THREE from "three";
import { colors, sizes } from "../config";

let {
  box: { x, y, z, lockXAspect },
} = sizes;

if (lockXAspect) {
  y = x;
  z = x * 1.16;
}
const boxGeometry = new THREE.BoxGeometry(x, y, z);
const material = [
  new THREE.MeshBasicMaterial({
    // front right side
    color: colors.orange,
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    // back left side
    transparent: false,
    opacity: 100,
    color: colors.lightBlue,
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    // top
    color: colors.orange,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    // bottom
    color: colors.darkBlue,
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    // front left side
    color: colors.beige,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    // back right side
    color: colors.lightBlue,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  }),
];
const meshBox = new THREE.Mesh(boxGeometry, material);
export { meshBox };
