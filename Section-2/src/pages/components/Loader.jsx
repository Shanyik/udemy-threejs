import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

const Loader = () => {
  const texture = useLoader(
    THREE.TextureLoader,
    './img/1.png',
  );
  console.log(texture);

  return (
    <>
      <Canvas>
        <mesh>
          <planeGeometry args={[4, 4]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </Canvas>
    </>
  );
};

export default Loader;
