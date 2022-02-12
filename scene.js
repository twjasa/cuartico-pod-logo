import * as THREE from "three";
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
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
  const pointLight = new THREE.DirectionalLight(0xffffff, 2, 119);
  pointLight.position.set(1, 1, 1);

  const controls = new OrbitControls(camera, renderer.domElement);
  const animate = () => {
    renderer.render(scene, camera);
    // controls.minPolarAngle = Math.PI / 2;
    // controls.maxPolarAngle = Math.PI / 2;
    controls.update();
    requestAnimationFrame(animate);
  };

  renderer.setSize(window.innerWidth, window.innerHeight);
  scene.add(ambientLight, pointLight);
  camera.position.set(-200, 200, 200);
  controls.enablePan = false;

  container.append(renderer.domElement);
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  animate();

  return scene;
};

export { setupScene };
