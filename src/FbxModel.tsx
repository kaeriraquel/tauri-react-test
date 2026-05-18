import { useEffect } from "react";
import { Center, useAnimations, useGLTF } from "@react-three/drei";

export default function Model() {
  const model = useGLTF("/textures/animtest.glb");

  const { actions, names } = useAnimations(
    model.animations,
    model.scene
  );

  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]]?.reset().play();
    }
  }, [actions, names]);

  return (
    <Center>
      <primitive object={model.scene} scale={1} />
    </Center>
  );
}