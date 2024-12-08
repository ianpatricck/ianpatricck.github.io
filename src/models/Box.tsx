import React from "react";

export default function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="dimgray" wireframe />
    </mesh>
  );
}
