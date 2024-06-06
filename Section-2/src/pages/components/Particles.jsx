import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Particles = () => {
  const particles = useRef();

  useFrame((state, delta) => {
    particles.current.rotation.y += delta * 0.02;
    particles.current.rotation.x += delta * 0.08;
  });

  const texture = useLoader(
    THREE.TextureLoader,
    './img/alphaSnow.jpg',
  );

  const verticesAmount = 15000;
  const positionArray = new Float32Array(
    verticesAmount * 3,
  );

  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <>
      <OrbitControls />
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positionArray.length}
            array={positionArray}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          alphaMap={texture}
          transparent
          depthTest={false}
        />
      </points>
    </>
  );
};

export default Particles;
