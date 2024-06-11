import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import ModelScene from './components/ModelScene';
import Particles from './components/Particles';

const ModelPage = () => {
  const [snow, setSnow] = useState(false);

  const toggleSnow = () => {
    setSnow(!snow);
  };

  return (
    <>
      <button
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1,
          margin: '10px',
        }}
        onClick={toggleSnow}
      >
        snow
      </button>
      <Canvas style={{ backgroundColor: 'black' }}>
        {snow ? <Particles /> : null}
        <ModelScene />
      </Canvas>
    </>
  );
};

export default ModelPage;
