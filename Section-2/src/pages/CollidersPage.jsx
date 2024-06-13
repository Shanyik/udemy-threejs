import React from 'react';
import { Canvas } from '@react-three/fiber';
import CollidersComponent from './components/CollidersComponent';

const CollidersPage = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [3, 3, 7],
        }}
      >
        <CollidersComponent />
      </Canvas>
    </>
  );
};

export default CollidersPage;
