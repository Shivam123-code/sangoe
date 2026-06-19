'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Html, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Planet data ─── */
const PLANETS = [
  {
    label: 'Sales & CRM', sub: 'Revenue Engine',
    color: '#f97316', emissive: '#7c2d12',
    orbitRadiusX: 3.6, orbitRadiusZ: 1.5,
    speed: 0.28, size: 0.20, start: 0.0, yOffset: 0.1,
  },
  {
    label: 'HR & People', sub: 'Workforce OS',
    color: '#3b82f6', emissive: '#1e3a8a',
    orbitRadiusX: 5.0, orbitRadiusZ: 2.0,
    speed: 0.18, size: 0.24, start: 1.05, yOffset: -0.15,
  },
  {
    label: 'Operations', sub: 'Process Control',
    color: '#10b981', emissive: '#064e3b',
    orbitRadiusX: 4.2, orbitRadiusZ: 1.7,
    speed: 0.22, size: 0.21, start: 2.1, yOffset: 0.2,
  },
  {
    label: 'Finance', sub: 'Money Intelligence',
    color: '#f59e0b', emissive: '#78350f',
    orbitRadiusX: 6.4, orbitRadiusZ: 2.5,
    speed: 0.13, size: 0.28, start: 3.14, yOffset: -0.1,
  },
  {
    label: 'Compliance', sub: 'Legal Shield',
    color: '#a855f7', emissive: '#4c1d95',
    orbitRadiusX: 3.0, orbitRadiusZ: 1.2,
    speed: 0.35, size: 0.17, start: 4.2, yOffset: 0.3,
  },
  {
    label: 'AI Co-Pilot', sub: 'Intelligence Layer',
    color: '#06b6d4', emissive: '#164e63',
    orbitRadiusX: 7.5, orbitRadiusZ: 3.0,
    speed: 0.09, size: 0.30, start: 0.8, yOffset: 0.0,
  },
];

/* ─── Orbit ring ─── */
function OrbitRing({ radiusX, radiusZ }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radiusX, 0, Math.sin(a) * radiusZ));
    }
    return pts;
  }, [radiusX, radiusZ]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(points);
    return g;
  }, [points]);

  return (
    <line geometry={geo}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
    </line>
  );
}

/* ─── Single planet ─── */
function Planet({ data }) {
  const meshRef = useRef();
  const labelRef = useRef();
  const angleRef = useRef(data.start);

  useFrame((_, delta) => {
    angleRef.current += data.speed * delta;
    const a = angleRef.current;
    const x = Math.cos(a) * data.orbitRadiusX;
    const z = Math.sin(a) * data.orbitRadiusZ;
    const y = data.yOffset + Math.sin(a * 2) * 0.12;
    if (meshRef.current) {
      meshRef.current.position.set(x, y, z);
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[data.size, 32, 32]} />
        <meshStandardMaterial
          color={data.color}
          emissive={data.emissive}
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.5}
        />
        {/* Glow halo */}
        <pointLight color={data.color} intensity={0.8} distance={1.5} />
        {/* HTML label */}
        <Html distanceFactor={10} style={{ pointerEvents: 'none' }}>
          <div style={{
            background: 'rgba(5,5,20,0.85)',
            border: `1px solid ${data.color}40`,
            borderRadius: '8px',
            padding: '4px 10px',
            fontSize: '10px',
            fontWeight: 700,
            color: data.color,
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(8px)',
            transform: 'translateY(-22px)',
            letterSpacing: '0.04em',
          }}>
            {data.label}
          </div>
        </Html>
      </mesh>
    </group>
  );
}

/* ─── Central Sangoe core ─── */
function SangoeCore() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    if (coreRef.current) coreRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    if (ring1Ref.current) ring1Ref.current.rotation.z = state.clock.elapsedTime * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
  });

  return (
    <group>
      {/* Inner glow core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#4c1d95"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial color="#7c3aed" transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
      {/* Core light */}
      <pointLight color="#7c3aed" intensity={3} distance={8} />
      {/* Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.1, 0.012, 8, 80]} />
        <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.8} />
      </mesh>
      {/* Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.3, 0.008, 8, 80]} />
        <meshStandardMaterial color="#c4b5fd" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

/* ─── Nebula / background glow ─── */
function Nebula() {
  return (
    <Sparkles
      count={120}
      scale={20}
      size={1.5}
      speed={0.2}
      opacity={0.4}
      color="#7c3aed"
    />
  );
}

/* ─── Main exported canvas ─── */
export default function UniverseCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 4, 14], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-10, -5, -10]} intensity={0.3} color="#4f46e5" />

      {/* Stars */}
      <Stars radius={80} depth={50} count={6000} factor={3} saturation={0.2} fade speed={0.5} />

      {/* Nebula sparkles */}
      <Nebula />

      {/* Orbit rings */}
      {PLANETS.map((p, i) => (
        <OrbitRing key={i} radiusX={p.orbitRadiusX} radiusZ={p.orbitRadiusZ} />
      ))}

      {/* Central core */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <SangoeCore />
      </Float>

      {/* Planets */}
      {PLANETS.map((p, i) => (
        <Planet key={i} data={p} />
      ))}
    </Canvas>
  );
}
