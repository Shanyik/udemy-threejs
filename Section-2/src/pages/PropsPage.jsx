import React from 'react';
import { Canvas } from '@react-three/fiber';
import PropsComponent from './components/PropsComponent';

const PropsPage = () => {
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
        <PropsComponent />
      </Canvas>
    </>
  );
};

export default PropsPage;
