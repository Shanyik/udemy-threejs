import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';

const creatingCanvasContainer = state => {
  state.gl.setClearColor('black', 0.5);
};

const Basics = () => {
  return (
    /*
    <Canvas>
        <group position={[0,-1,0]}>
            <mesh rotation={[Math.PI * 0.5, 0, 0]}>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
            <mesh position={[3,0,0]} scale={1.5}>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </group>
    </Canvas>
    */

    <Canvas
      gl={{
        antialias: true,
        alpha: false,
      }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [2, 2, 5],
      }}
      onCreated={creatingCanvasContainer}
    >
      <Scene />
    </Canvas>
  );
};

export default Basics;
