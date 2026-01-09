import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const { positions, connections } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const connections: number[][] = [];

    // Create particles in a subtle grid pattern
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }

    // Create connections between nearby particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 2.5) {
          connections.push([i, j]);
        }
      }
    }

    return { positions, connections };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#61BAAD"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      {connections.slice(0, 30).map((connection, idx) => {
        const [i, j] = connection;
        const start = new THREE.Vector3(
          positions[i * 3],
          positions[i * 3 + 1],
          positions[i * 3 + 2]
        );
        const end = new THREE.Vector3(
          positions[j * 3],
          positions[j * 3 + 1],
          positions[j * 3 + 2]
        );

        return (
          <line key={idx}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  start.x, start.y, start.z,
                  end.x, end.y, end.z
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#61BAAD" opacity={0.15} transparent />
          </line>
        );
      })}
    </group>
  );
};

const FloatingOrbs = () => {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (orb1Ref.current) {
      orb1Ref.current.position.y = Math.sin(time * 0.5) * 0.5;
      orb1Ref.current.rotation.x = time * 0.2;
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.y = Math.cos(time * 0.3) * 0.7;
      orb2Ref.current.rotation.y = time * 0.3;
    }
    if (orb3Ref.current) {
      orb3Ref.current.position.y = Math.sin(time * 0.4) * 0.3;
      orb3Ref.current.rotation.z = time * 0.15;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[-4, 0, -3]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#61BAAD"
          transparent
          opacity={0.15}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      <mesh ref={orb2Ref} position={[4, 0, -2]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#F7AB0A"
          transparent
          opacity={0.12}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      <mesh ref={orb3Ref} position={[0, -2, -4]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#3B82F6"
          transparent
          opacity={0.1}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </>
  );
};

const SkillsBackground3D = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server-side
  if (!mounted) {
    return <div className="absolute inset-0 opacity-60" />;
  }

  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#61BAAD" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#F7AB0A" />

        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default SkillsBackground3D;
