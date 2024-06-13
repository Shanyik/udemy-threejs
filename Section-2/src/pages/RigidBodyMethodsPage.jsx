import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { useRef } from 'react';

const RigidBodyMethodsPage = () => {
  const cubeRef = useRef();
  const secondCubeRef = useRef();

  const cubeClickHandler = () => {
    cubeRef.current.applyImpulse({ x: 1, y: 0, z: 0 });
  };

  const secondCubeClickHandler = () => {
    secondCubeRef.current.applyImpulse({
      x: 8,
      y: 0,
      z: 0,
    });
  };

  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [5, 3, 7],
      }}
    >
      <>
        <OrbitControls />

        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 3]} castShadow />

        <Physics>
          <RigidBody
            ref={cubeRef}
            onCollisionEnter={() =>
              console.log('Collision Enter')
            }
            onCollisionExit={() =>
              console.log('Collision Exit')
            }
            onSleep={() => console.log('sleeping')}
            onWake={() => console.log('wake')}
            gravityScale={1}
            restitution={0}
            friction={0}
          >
            <mesh
              castShadow
              position={[1.5, 2.5, 0]}
              onClick={cubeClickHandler}
            >
              <boxGeometry />
              <meshStandardMaterial color="#CC3941" />
            </mesh>
          </RigidBody>

          <RigidBody ref={secondCubeRef}>
            <mesh
              castShadow
              position={[-1.5, 2.5, 0]}
              onClick={secondCubeClickHandler}
            >
              <boxGeometry />
              <meshStandardMaterial color="#CC3941" />
            </mesh>
          </RigidBody>

          <RigidBody
            type="fixed"
            restitution={1}
            friction={0}
          >
            <mesh
              position-y={-1}
              rotation-x={-Math.PI * 0.5}
              receiveShadow
            >
              <boxGeometry args={[15, 15, 0.35]} />
              <meshStandardMaterial color="#C7CAC7" />
            </mesh>
          </RigidBody>
        </Physics>
      </>
    </Canvas>
  );
};

export default RigidBodyMethodsPage;
