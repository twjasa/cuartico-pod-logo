import * as THREE from "three";
import { addSVGtoScene } from "./svg";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const setupScene = (container) => {
  let camera, scene, renderer;
  scene = new THREE.Scene();
  const frustumSize = 500;
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    1,
    1000
  );
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
  const pointLight = new THREE.DirectionalLight(0xffffff, 2, 119);
  pointLight.position.set(1, 1, 1);

  const controls = new OrbitControls(camera, renderer.domElement);
  const maxAngle = Math.PI / 3.5;
  const animate = () => {
    renderer.render(scene, camera);
    controls.minPolarAngle = maxAngle;
    controls.maxPolarAngle = maxAngle;
    controls.update();
    requestAnimationFrame(animate);
  };

  renderer.setSize(window.innerWidth, window.innerHeight);
  scene.add(ambientLight, pointLight);
  camera.position.set(
    215.09881178392288,
    215.09881178392288,
    162.7393950106054
  );
  controls.rotateSpeed = 0.2;
  controls.enablePan = false;
  // controls.addEventListener("change", () => { // to debug camera
  //   console.log(camera.position);
  // });
  console.log(controls);
  container.append(renderer.domElement);
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    console.log(camera.position);
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  animate();
  addSVGtoScene(scene, "./assets/elcuartico.svg");
  return { scene, camera };
};

export { setupScene };
