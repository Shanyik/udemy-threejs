import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import Effect from './components/Effect';

const PostProcessPage = () => {
  const circleRef = useRef();

  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [2, 2, 6],
        }}
      >
        <color args={['#ffffff']} attach="background" />
        <OrbitControls />

        <Effect ref={circleRef} />

        <mesh position-x={1}>
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>

        <mesh position-x={-1}>
          <boxGeometry />
          <meshBasicMaterial color="rgb(106,115,180)" />
        </mesh>

        <mesh position-z={-12} ref={circleRef}>
          <circleGeometry args={[7, 64]} />
          <meshBasicMaterial color="orange" />
        </mesh>
      </Canvas>
    </>
  );
};

export default PostProcessPage;
