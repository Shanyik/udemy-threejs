import React from 'react';
import { Canvas } from '@react-three/fiber';
import CameraComponent from './components/CameraComponent';

const CameraPage = () => {
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
      <CameraComponent />
    </Canvas>
  );
};

export default CameraPage;
