import { toDegree } from "../utils/toDegree";
import Bookshelf from "./Objects/Bookshelf";
import Chair from "./Objects/Chair";
import Computer from "./Objects/Computer";
import Keyboard from "./Objects/Keyboard";
import Laptop from "./Objects/Laptop";
import Monitor from "./Objects/Monitor";
import Mouse from "./Objects/Mouse";
import Scenario from "./Objects/Scenario";
import Shelf from "./Objects/Shelf";
import Table from "./Objects/Table";

/*
 *  Componente do ambiente
 *
 *  Retorna todos os objetos dispostos dentro do ambiente.
 *
 */

export default function ThreeAmbient() {
  return (
    <group scale={2}>
      <Scenario
        position={{
          x: 0,
          y: 0,
          z: 0,
        }}
      />
      <Table
        position={{
          x: 1.8,
          y: 0.02,
          z: -2.7,
        }}
        scale={0.3}
        rotation={{ x: 0, y: toDegree(-90), z: 0 }}
      />
      <Chair
        position={{
          x: 1.8,
          y: 0.02,
          z: -1.4,
        }}
        scale={0.6}
        rotation={{ x: 0, y: toDegree(120), z: 0 }}
      />
      <Monitor
        position={{
          x: 1.8,
          y: 0.6,
          z: -2.7,
        }}
        scale={0.6}
        rotation={{ x: 0, y: toDegree(70), z: 0 }}
      />
      <Keyboard
        position={{
          x: 1.7,
          y: 0.62,
          z: -2.4,
        }}
        scale={0.6}
        rotation={{ x: 0, y: toDegree(-80), z: 0 }}
      />
      <Mouse
        position={{
          x: 2.2,
          y: 0.62,
          z: -2.4,
        }}
        scale={0.07}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Computer
        position={{
          x: 2.5,
          y: 0.62,
          z: -2.6,
        }}
        scale={0.3}
        rotation={{ x: 0, y: toDegree(270), z: 0 }}
      />
      <Bookshelf
        position={{
          x: 3.1,
          y: 0.1,
          z: -1,
        }}
        scale={0.2}
        rotation={{ x: 0, y: toDegree(180), z: 0 }}
      />
      <Laptop
        position={{
          x: 1.1,
          y: 0.62,
          z: -2.6,
        }}
        scale={0.18}
        rotation={{ x: 0, y: toDegree(-75), z: 0 }}
      />
      <Shelf
        position={{
          x: 1.5,
          y: 1.5,
          z: -3.24,
        }}
        scale={0.3}
        rotation={{ x: 0, y: toDegree(-90), z: 0 }}
      />
    </group>
  );
}
