import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { a, useSpring } from '@react-spring/three';

const SpringPage = () => {
  const [click, setClick] = useState(false);
  const { scale, color } = useSpring({
    from: {
      scale: click ? 1 : 2,
      color: click ? 'orange' : 'hotpink',
    },
    scale: click ? 2 : 1,
    color: click ? 'hotpink' : 'orange',
  });

  console.log(scale);

  const clickHandler = () => {
    setClick(!click);
  };

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
        <a.mesh onClick={clickHandler} scale={scale}>
          <boxGeometry />
          <a.meshBasicMaterial color={color} />
        </a.mesh>
      </Canvas>
    </>
  );
};

export default SpringPage;
