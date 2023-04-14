import React from "react"
import { useGLTF, OrthographicCamera } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
type GLTFResult = GLTF & {
  nodes: {
    Ellipse: THREE.Mesh
    Ellipse_2: THREE.Mesh
    Ellipse_3: THREE.Mesh
    Ellipse_4: THREE.Mesh
    Boolean: THREE.Mesh
  }
}
export function Palette() {
  const { nodes } = useGLTF("/palette.gltf") as GLTFResult
  return (
    <group dispose={null}>
      <group scale={0.01}>
        <directionalLight
          intensity={1}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[0, 0, 1000]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse_4.geometry}
          material={nodes.Ellipse_4.material}
          position={[-174.91, -3.22, 39.87]}
          rotation={[-0.72, -0.01, 0.02]}
        >
          <meshToonMaterial color={"green"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse_3.geometry}
          material={nodes.Ellipse_3.material}
          position={[246.71, 4.92, 9.9]}
          rotation={[-0.72, -0.01, 0.02]}
        >
          <meshToonMaterial color={"purple"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse_2.geometry}
          material={nodes.Ellipse_2.material}
          position={[115.82, -84.74, 107.13]}
          rotation={[-0.72, -0.01, 0.02]}
        >
          <meshToonMaterial color={"blue"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse.geometry}
          material={nodes.Ellipse.material}
          position={[-57.39, -135, 135.12]}
          rotation={[-0.72, -0.01, 0.02]}
        >
          <meshToonMaterial color={"#c2a"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Boolean.geometry}
          material={nodes.Boolean.material}
          position={[20.3, -16.13, 15.48]}
        >
          <meshToonMaterial color={"red"} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload("/palette.gltf")
