import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PositionalAudio,
} from '@react-three/drei';
import { useState } from 'react';

const AudioPage = () => {
  const [play, setPlay] = useState(false);

  const clickHandler = () => {
    setPlay(!play);
  };

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
        <OrbitControls />

        {play && (
          <PositionalAudio
            url="./sound/sound.mp3"
            autoplay
            loop
            distance={5}
          />
        )}

        <mesh onClick={clickHandler}>
          <boxGeometry />
          <meshBasicMaterial color="purple" />
        </mesh>
      </Canvas>
    </>
  );
};

export default AudioPage;
