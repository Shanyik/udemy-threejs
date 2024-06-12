import React from 'react';
import { Canvas } from '@react-three/fiber';
import SpringRefComponent from './components/SpringRefComponent';

const SpringRefPage = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 2, 7],
        }}
      >
        <SpringRefComponent />
      </Canvas>
    </>
  );
};

export default SpringRefPage;
