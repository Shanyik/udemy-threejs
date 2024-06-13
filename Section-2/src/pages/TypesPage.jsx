import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  KeyboardControls,
} from '@react-three/drei';
import TypesComponents from './components/TypesComponents';

const TypesPage = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [0, 7, 20],
      }}
    >
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />

      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
          {
            name: 'rightward',
            keys: ['ArrowRight', 'KeyD'],
          },
          { name: 'jump', keys: ['Space'] },
        ]}
      >
        <TypesComponents />
      </KeyboardControls>
    </Canvas>
  );
};

export default TypesPage;
