import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import Product3D from './Product3D';

const Scene = ({ product, selectedColor }) => {
  const controlsRef = useRef();

  return (
    <Canvas
      shadows
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      }}
      style={{ 
        background: 'transparent',
        width: '100%',
        height: '100%',
        display: 'block',
        margin: 0,
        padding: 0
      }}
    >
      {/* Cámara con posición estilo Apple */}
      <PerspectiveCamera makeDefault position={[0, 1, 8]} fov={50} />

      {/* Iluminación premium (estilo Apple/Nike) */}
      <ambientLight intensity={0.4} />
      
      {/* Luz principal (key light) */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Luz de relleno (fill light) */}
      <directionalLight 
        position={[-10, 5, -5]} 
        intensity={0.5}
        color="#667eea"
      />
      
      {/* Luz trasera (rim light) para efecto heroico */}
      <directionalLight 
        position={[0, 5, -10]} 
        intensity={0.8}
        color="#764ba2"
      />

      {/* Spot light para highlights */}
      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {/* Controles de órbita (estilo Nike - drag to rotate) */}
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2}
        autoRotate={false}
        autoRotateSpeed={1}
        dampingFactor={0.05}
        enableDamping={true}
      />

      {/* Environment map para reflejos realistas */}
      <Environment preset="city" />

      {/* Producto 3D con loading fallback */}
      <Suspense fallback={
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#667eea" wireframe />
        </mesh>
      }>
        <Product3D 
          modelPath={product?.modelPath}
          color={selectedColor}
          scale={product?.modelScale || 15}
          position={product?.modelPosition || [0, 0, 0]}
        />
      </Suspense>

      {/* Sombras de contacto (estilo Apple - muy sutil) */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={15}
        blur={2.5}
        far={4}
      />

      {/* Suelo invisible para recibir sombras */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </Canvas>
  );
};

export default Scene;