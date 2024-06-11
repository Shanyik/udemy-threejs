import React from 'react';
import { Canvas } from '@react-three/fiber';
import ShaderComponent from './components/ShaderComponent';

const ShaderPage = () => {
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
        <ShaderComponent />
      </Canvas>
    </>
  );
};

export default ShaderPage;
