import React from 'react';
import { Canvas } from '@react-three/fiber';
import PhysicsComponent from './components/PhysicsComponent';

const Physics = () => {
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
        <PhysicsComponent />
      </Canvas>
    </>
  );
};

export default Physics;
