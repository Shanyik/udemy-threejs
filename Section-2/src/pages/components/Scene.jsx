import React from 'react';
import {
  useFrame,
  extend,
  useThree,
} from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OrbitControls } from '@react-three/drei';
import CustomShape from './CustomShape';

extend({
  OrbitControls: OrbitControls,
});
const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  //const {gl, camera} = useThree()

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta;
    cubeRef.current.rotation.y += delta;
    planeRef.current.rotation.y += delta;

    //state.camera.position.x = Math.sin(Date.now() * 0.001) * 3
  });

  return (
    <>
      {/*<orbitControls args={[camera, gl.domElement]}/>*/}
      <OrbitControls />
      <mesh ref={planeRef} position-x={-3}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          color="yellow"
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={cubeRef} position-x={3}>
        <boxGeometry />
        <meshBasicMaterial color="blue" />
      </mesh>

      <CustomShape />
    </>
  );
};

export default Scene;
