import * as THREE from './node_modules/three/build/three.module.min.js';

//Scene
const scene = new THREE.Scene();

//Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set = (2,2,2);
scene.add(ambientLight, pointLight);

//TextureLoader
const textureLoader = new THREE.TextureLoader();
const colorTexture = textureLoader.load("./static/texture/color.jpg");
const matCapTexture = textureLoader.load("./static/texture/mat2.png");
const bumpTexture = textureLoader.load("./static/texture/bump.jpg");
const displacementTexture = textureLoader.load("./static/texture/displacementMap.jpg");

//CubeTextureLoader
const cubeTextureLoader = new THREE.CubeTextureLoader();
const cubeTexture = cubeTextureLoader.load([
    "./static/texture/env/px.png",
    "./static/texture/env/nx.png",
    "./static/texture/env/py.png",
    "./static/texture/env/ny.png",
    "./static/texture/env/pz.png",
    "./static/texture/env/nz.png",
]);
scene.background = cubeTexture;

//Resizing
window.addEventListener("resize", () => {
  //Update Size
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //New Aspect Ratio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  //New RendererSize
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Mesh
const geometry = new THREE.SphereGeometry(0.5,32,32);
const material = new THREE.MeshStandardMaterial();
material.map = colorTexture;
//material.wireframe = true;
//material.color = new THREE.Color("red");
//material.transparent = true;
//material.opacity = 0.5;
//material.side = THREE.DoubleSide;
//material.visible = false;
//material.matcap = matCapTexture;
//material.shininess = 200;
//material.specular = new THREE.Color(0x118ab2);
material.roughness = 0.35;
material.metalness = 0.6;
//material.bumpMap = bumpTexture;
//material.displacementMap = displacementTexture;

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 2;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
  //GetElapsedTime

  const timeElapsed = clock.getElapsedTime();

    //mesh.rotation.x = timeElapsed / 2;
    mesh.rotation.y = timeElapsed / 4;

  //Renderer
  renderer.render(scene, camera);

  //RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();
