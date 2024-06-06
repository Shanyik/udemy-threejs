import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import ModelScene from './components/ModelScene';
import Particles from './components/Particles';

const ModelPage = () => {
  return (
    <Canvas style={{ backgroundColor: 'grey' }}>
      {/* <Particles /> */}
      <ModelScene />
    </Canvas>
  );
};

export default ModelPage;
