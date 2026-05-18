import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Model from "./FbxModel";
import { GridHelper } from "three";


// function Cube() {

//   return (
//     <mesh rotation={[0.4, 0.4, 0]}>
//       <boxGeometry args={[2,2,2]} />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   );
// }

export default function App() {
  return (
    <div className="container">
      <h1>ASSEMBLY FBX TO GLB</h1>

      <div className="viewer">
        <Canvas camera={{ position: [0, 10, 20] }}>
          <ambientLight intensity={1.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}

          />
          <gridHelper args={[20, 20]} />
          <axesHelper args={[5]} />
          <Model />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}