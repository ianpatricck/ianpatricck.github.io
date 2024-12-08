import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./models/Box";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Canvas>
        <ambientLight intensity={1} />

        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
