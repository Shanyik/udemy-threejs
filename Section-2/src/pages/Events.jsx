import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';

const Events = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <>
      <Canvas style={{ backgroundColor: 'grey' }}>
        <OrbitControls />

        <mesh onClick={clickHandler} position-x={1}>
          <boxGeometry />
          <meshBasicMaterial
            color={active ? 'pink' : 'orange'}
          />
        </mesh>

        <mesh
          onClick={e => {
            e.stopPropagation();
          }}
          position-x={-1}
        >
          <boxGeometry />
          <meshBasicMaterial color="purple" />
        </mesh>
      </Canvas>
    </>
  );
};

export default Events;
