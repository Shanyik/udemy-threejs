import React from 'react';
import { Canvas } from '@react-three/fiber';
import MeshPortalMaterialComponent from './components/MeshPortalMaterialComponent';

const MeshPortalMaterialPage = () => {
  return (
    <Canvas>
      <MeshPortalMaterialComponent />
    </Canvas>
  );
};

export default MeshPortalMaterialPage;
