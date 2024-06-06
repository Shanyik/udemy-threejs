import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Particles from './components/Particles';

const ParticlesPage = () => {
  return (
    <>
      <Canvas
        gl={{
          antialias: true,
          alpha: false,
        }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [2, 2, 5],
        }}
      >
        <Particles />
      </Canvas>
    </>
  );
};

export default ParticlesPage;
