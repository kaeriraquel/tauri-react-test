import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function Cube() {

  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[2,2,2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App(){
  return (
    <div className="container">
      <h1>PRUEBA PARA ASSEMBLY CLICLES BOMBA</h1>

      <div className="viewer">
        <Canvas camera={{ position: [4,4,4]}}>
          <ambientLight intensity={0.5} />

          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
          />
          <Cube />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}