import * as THREE from "three";
import { colors } from "../config";

const lidGeometry = new THREE.PlaneGeometry(1.28, 0.3, 1, 2);
const lidMaterial = new THREE.MeshBasicMaterial({
  color: colors.lightBlue,
  side: THREE.DoubleSide,
});
const meshLid = new THREE.Mesh(lidGeometry, lidMaterial);
meshLid.position.set(0, 190, 0);
const rotate90 = (90 / 180) * Math.PI;
meshLid.rotation.set(0, rotate90, 0);
meshLid.geometry.scale(200, 200, 200);

export { meshLid };
