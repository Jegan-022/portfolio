import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera, AdaptiveDpr, AdaptiveEvents, Preload, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useQuality } from './AdaptiveQualityManager';

function FloatingObjects() {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-4, 2, -5]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial 
            color="#38BDF8" 
            transparent 
            opacity={0.4} 
            roughness={0.1} 
            metalness={0.5}
            wireframe={true}
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[5, -3, -8]}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial 
            color="#8B5CF6" 
            transparent 
            opacity={0.3} 
            roughness={0.2} 
            metalness={0.8}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[3, 4, -10]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial 
            color="#06B6D4" 
            transparent 
            opacity={0.3} 
            roughness={0.1}
            metalness={0.5}
            wireframe={true}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleGalaxy({ particlesCount }: { particlesCount: number }) {
  const points = useRef<THREE.Points>(null);
  
  // Memoize geometry and material
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const r = 25 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [particlesCount]);
  
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      color: "#8B5CF6",
      size: 0.1,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group>
      <Stars radius={100} depth={50} count={Math.floor(particlesCount / 2)} factor={4} saturation={0} fade speed={1} />
      <points ref={points} geometry={geometry} material={material} />
    </group>
  );
}

export default function Scene3D() {
  const quality = useQuality();

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas dpr={quality.dpr} gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <FloatingObjects />
        <ParticleGalaxy particlesCount={quality.particleCount} />
        <Preload all />
      </Canvas>
    </div>
  );
}
