import React from 'react';
import { Canvas } from '@react-three/fiber';
import EnvironmentComponent from './components/EnvironmentComponent';

const EnvironmentPage = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [1, 3, 6],
      }}
    >
      <EnvironmentComponent />
    </Canvas>
  );
};

export default EnvironmentPage;