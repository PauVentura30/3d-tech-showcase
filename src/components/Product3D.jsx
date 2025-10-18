import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Product3D = ({ modelPath, color, scale = 1.5, position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const { scene } = useGLTF(modelPath);
  const clonedScene = React.useMemo(() => scene.clone(), [scene]);

  // Auto-rotación suave
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Aplicar color correctamente
  useEffect(() => {
    if (clonedScene) {
      clonedScene.traverse((child) => {
        if (child.isMesh) {
          // Guardar material original si no existe
          if (!child.userData.originalMaterial) {
            child.userData.originalMaterial = child.material.clone();
          }

          // Clonar desde el original
          child.material = child.userData.originalMaterial.clone();
          
          // Aplicar color como tinte multiplicativo
          if (child.material.color) {
            const targetColor = new THREE.Color(color);
            child.material.color.multiply(targetColor);
          }
          
          // Si tiene emissive, también aplicarlo
          if (child.material.emissive) {
            child.material.emissive.set(color);
            child.material.emissiveIntensity = 0.1;
          }
          
          child.material.needsUpdate = true;
        }
      });
    }
  }, [color, clonedScene]);

  return (
    <group ref={groupRef} position={position}>
      <primitive object={clonedScene} scale={scale} />
    </group>
  );
};

// Precargar todos los modelos
useGLTF.preload('/models/headset.glb');
useGLTF.preload('/models/keyboard.glb');
useGLTF.preload('/models/mouse.glb');
useGLTF.preload('/models/watch.glb');

export default Product3D;