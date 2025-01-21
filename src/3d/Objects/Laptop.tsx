import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

type Vector = {
  x: number;
  y: number;
  z: number;
};

type LaptopProps = {
  position: Vector;
  scale: number;
  rotation: Vector;
};

export default function Laptop({ position, scale, rotation }: LaptopProps) {
  const laptop = useLoader(GLTFLoader, "/models/laptop.glb");

  const ref = useRef<Mesh>(null);

  const [hovered, setHovered] = useState<boolean>(false);
  const [currentScale, setCurrentScale] = useState<number>(scale);
  const [currentRotation, setCurrentRotation] = useState<Vector>(rotation);

  useFrame(({ clock }) => {
    if (hovered) {
      document.body.style.cursor = hovered ? "pointer" : "auto";
      setCurrentRotation({
        x: rotation.x,
        y: clock.getElapsedTime(),
        z: rotation.z,
      });
    } else {
      setCurrentScale(scale);
      setCurrentRotation({ x: rotation.x, y: currentRotation.y, z: rotation.z });
    }
  });

  return (
    <mesh
      ref={ref}
      position={[position.x, position.y, position.z]}
      scale={currentScale}
      rotation={[currentRotation.x, currentRotation.y, currentRotation.z]}
      onPointerOver={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <primitive object={laptop.scene} />
    </mesh>
  );
}
