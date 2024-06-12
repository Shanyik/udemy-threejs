import React from 'react';
import { Canvas } from '@react-three/fiber';
import ImperativeApiComponent from './components/ImperativeApiComponent';

const ImperativeAPI = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [0, 2, 7],
      }}
    >
      <ImperativeApiComponent />
    </Canvas>
  );
};

export default ImperativeAPI;
