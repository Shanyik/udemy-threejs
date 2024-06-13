import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SensorComponent from './components/SensorComponent';

const SensorPage = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 3, 12],
        }}
      >
        <OrbitControls />

        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 3]} castShadow />

        <SensorComponent />
      </Canvas>
    </>
  );
};

export default SensorPage;
