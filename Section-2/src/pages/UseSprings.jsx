import React from 'react';
import { Canvas } from '@react-three/fiber';
import UseSpringsComponent from './components/UseSpringsComponent';

const UseSprings = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 0, 7],
        }}
      >
        <UseSpringsComponent />
      </Canvas>
    </>
  );
};

export default UseSprings;
