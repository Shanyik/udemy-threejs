import * as THREE from './node_modules/three/build/three.module.min.js';

/*
    1. scene
    2. objects (Mesh)
    3. camera
    4. renderer
*/

//Scene
const scene = new THREE.Scene();

//Mesh - Every mesh needs a geometry and a material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material); 

scene.add(mesh);

//Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // default: near value: 1, far value: 2000
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");  // select the canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); // add the renderer
renderer.setSize(aspect.width, aspect.height);  // set the renderer size
renderer.render(scene, camera); // render the scene with the camera
