import React from 'react';
import { Canvas } from '@react-three/fiber';
import TrailComponent from './components/TrailComponent';

const TrailPage = () => {
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
        <TrailComponent />
      </Canvas>
    </>
  );
};

export default TrailPage;
