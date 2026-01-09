import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

interface SoftSkill {
  name: string;
  description: string;
  color: string;
  position: [number, number, number];
}

const softSkills: SoftSkill[] = [
  {
    name: "Systems Thinking",
    description: "Connecting abstract concepts with practical applications",
    color: "#61BAAD",
    position: [-2.5, 1, 0],
  },
  {
    name: "Fast Learning",
    description: "Rapidly adapting to new technologies and frameworks",
    color: "#3B82F6",
    position: [2.5, 1, 0],
  },
  {
    name: "Problem Solving",
    description: "Analytical approach to complex technical challenges",
    color: "#F59E0B",
    position: [0, -1.5, 0],
  },
  {
    name: "Full-Stack Mindset",
    description: "End-to-end ownership from concept to deployment",
    color: "#10B981",
    position: [-2, -0.5, -1],
  },
  {
    name: "Creative Design",
    description: "UX-focused solutions with technical excellence",
    color: "#EC4899",
    position: [2, -0.5, -1],
  },
];

const FloatingSphere = ({ skill }: { skill: SoftSkill }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;

      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh
        ref={meshRef}
        position={skill.position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.8, 64, 64]} />
        <MeshDistortMaterial
          color={skill.color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={skill.color}
          emissiveIntensity={hovered ? 0.4 : 0.2}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 200; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#61BAAD"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const SoftSkills3D = () => {
  return (
    <div className="relative w-full">
      {/* 3D Canvas */}
      <div className="h-[500px] md:h-[600px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#1a2332]">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#61BAAD" intensity={0.5} />

          <ParticleField />

          {softSkills.map((skill) => (
            <FloatingSphere key={skill.name} skill={skill} />
          ))}

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>

        {/* Instruction overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-400 text-sm font-['Electrolize'] tracking-wider"
          >
            Drag to rotate • Hover spheres to interact
          </motion.p>
        </div>
      </div>

      {/* Skill Cards Below */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1a2332]/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-opacity-100 transition-all duration-300 group"
            style={{ borderColor: `${skill.color}40` }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-3 h-3 rounded-full mt-1 group-hover:scale-125 transition-transform"
                style={{ backgroundColor: skill.color, boxShadow: `0 0 20px ${skill.color}80` }}
              />
              <div>
                <h4 className="text-base font-semibold text-gray-200 mb-1 font-['Electrolize']">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills3D;
