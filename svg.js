import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

const addSVGtoScene = (scene, svgRoute) => {
  const loader = new SVGLoader();
  loader.load(
    svgRoute,
    function (data) {
      console.log(data);
      const paths = data.paths;
      const group = new THREE.Group();
      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        console.log(path.userData.style.fill);
        const material = new THREE.MeshBasicMaterial({
          color: path.userData.style.fill,
          side: THREE.DoubleSide,
          depthWrite: false,
        });

        const shapes = SVGLoader.createShapes(path);

        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j];
          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);
          mesh.geometry.scale(1, 0.97, 1);
          group.add(mesh);
        }
      }
      const rotate90 = (90 / 60) * Math.PI;
      group.rotation.set((90 / 10) * Math.PI, rotate90, 0);
      group.position.set(101, 85, 110);
      console.log(group.geometry);
      group.geometry;
      scene.add(group);
    },
    // called when loading is in progresses
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened");
    }
  );
};

export { addSVGtoScene };
