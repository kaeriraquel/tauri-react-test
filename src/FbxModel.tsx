import { Center, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, MeshStandardMaterial } from "three";

export default function Model() {
  const model = useGLTF("/models/test.glb");
  const texture = useLoader(TextureLoader, "/textures/texturaEnd.png");

  model.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({
        map: texture,
      });
    }
  });

  return (
    <Center>
      <primitive object={model.scene} scale={1} />
    </Center>
  );
}