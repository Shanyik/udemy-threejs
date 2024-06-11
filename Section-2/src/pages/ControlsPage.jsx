import React from 'react';
import { Canvas } from '@react-three/fiber';
import ControlsComponent from './components/ControlsComponent';

const ControlsPage = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <ControlsComponent />
      </Canvas>
    </>
  );
};

export default ControlsPage;
