import * as THREE from './node_modules/three/build/three.module.min.js';

//Scene

const scene = new THREE.Scene();

//Mesh

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Camera

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Renderer

const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

//Clock class

const clock = new THREE.Clock();

const animate = () => {

    const timeElapsed = clock.getElapsedTime();

    mesh.rotation.x = timeElapsed * Math.PI ;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

//function will get call by refresh rate (eg 60 fps) so 0.01 * 60 = 0.6 without clock class