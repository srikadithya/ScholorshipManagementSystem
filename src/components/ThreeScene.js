import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeScene = () => {
  const boxRef = useRef();

  return (
    <Canvas style={{ height: '300px', width: '100%' }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      {/* Interactive Box */}
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
