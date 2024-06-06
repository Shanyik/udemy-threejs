import React from 'react';
import * as THREE from 'three';

const CustomShape = () => {
  const positionArray = new Float32Array([
    0, 0, 0, 0, 1, 0, 1, 0, 0,
  ]);

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach={'attributes-position'}
          count={3}
          array={positionArray}
          itemSize={3}
        />
      </bufferGeometry>
      <meshBasicMaterial
        color="red"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default CustomShape;
