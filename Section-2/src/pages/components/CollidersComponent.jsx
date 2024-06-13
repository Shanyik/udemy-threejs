import React from 'react';
import { OrbitControls } from '@react-three/drei';
import {
  Physics,
  RigidBody,
  CuboidCollider,
  CapsuleCollider,
} from '@react-three/rapier';

const CollidersComponent = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />

      <Physics gravity={[0, -9.81, 0]}>
        <RigidBody
          colliders={false}
          position={[1.5, 1.5, 0]}
        >
          <CuboidCollider args={[0.5, 0.5, 0.5]} />
          {/* <CuboidCollider args={[0.25, 0.25, 0.25]} position={[-2, -1, -2.5]} /> */}
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody colliders="trimesh">
          <mesh position={[-1.5, 1.5, 0]}>
            <torusKnotGeometry
              args={[0.5, 0.15, 100, 100]}
            />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody
          colliders={false}
          position={[0, 1.5, -1.5]}
        >
          <CapsuleCollider args={[0.375, 0.6]} />
          <mesh>
            <sphereGeometry args={[0.75, 64, 64]} />
            <meshStandardMaterial color="#23B278" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh
            position-y={-1}
            rotation-x={-Math.PI * 0.5}
            receiveShadow
          >
            <boxGeometry args={[8, 8, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default CollidersComponent;