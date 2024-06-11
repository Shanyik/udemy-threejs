import React from 'react';
import { Canvas } from '@react-three/fiber';
import TextComponent from '../components/TextComponent';

const TextPage = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [1, 1, 6],
        }}
      >
        <TextComponent />
      </Canvas>
    </>
  );
};

export default TextPage;
