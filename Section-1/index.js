import * as THREE from './node_modules/three/build/three.module.min.js';

/*
    1. scene
    2. objects (Mesh)
    3. camera
    4. renderer
*/

//Scene
const scene = new THREE.Scene();

//Group

const group = new THREE.Group();

//Mesh - Every mesh needs a geometry and a material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material); 

//mesh.position.x = 1;
//mesh.position.y = 1;
mesh.position.z = 1;
//mesh.scale.x = 2;
//mesh.scale.y = 3;
//mesh.rotation.x = Math.PI * 0.25;
//mesh.rotation.y = Math.PI * 1.2;

//scene.add(mesh);

//MeshTwo

const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshBasicMaterial({ color: "green" });
const meshT = new THREE.Mesh(geometryT, materialT);

meshT.position.y = 2;
//scene.add(meshT);

group.add(mesh,meshT);
group.position.x = 1;
scene.add(group);

//Axes Helper

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

//Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // default: near value: 1, far value: 2000
camera.position.z = 5;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");  // select the canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); // add the renderer
renderer.setSize(aspect.width, aspect.height);  // set the renderer size
renderer.render(scene, camera); // render the scene with the camera