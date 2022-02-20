import * as THREE from "three";
import { addSVGtoScene } from "./svg";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import elCuarticoSvg from "./assets/elcuartico.svg?url";

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
  // I found interesting that the correct way to position the camera to a isometric view is with an
  // angle of arctan(2^-1/2) which is aprox 35.264 degree with X axis, I have been debugging this code to show
  //correctly the cuartico logo, and found that this angle is related with the Y axis, thats why the angle is
  // 54.736 (90 - 35.264)
  const maxAngle = THREE.MathUtils.degToRad(54.736);
  const animate = () => {
    renderer.render(scene, camera);
    controls.minPolarAngle = maxAngle;
    controls.maxPolarAngle = maxAngle;
    controls.update();
    requestAnimationFrame(animate);
  };

  renderer.setSize(window.innerWidth, window.innerHeight);
  scene.add(ambientLight, pointLight);
  camera.position.set(200, 200, 200);
  controls.rotateSpeed = 0.2;
  controls.enablePan = false;
  // controls.addEventListener("change", () => { // to debug camera
  //   console.log(camera.position);
  // });
  container.append(renderer.domElement);
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  animate();
  addSVGtoScene(scene, elCuarticoSvg);
  return { scene, camera, controls };
};

export { setupScene };
