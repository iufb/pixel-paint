import React from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { Material } from "three"
type GLTFResult = GLTF & {
  nodes: {
    Desk: THREE.Mesh
    color1: THREE.Mesh
    color2: THREE.Mesh
    color3: THREE.Mesh
    color4: THREE.Mesh
    color: THREE.Mesh
    color001: THREE.Mesh
    stick: THREE.Mesh
    stick2: THREE.Mesh
    tassel: THREE.Mesh
  }
  materials: {
    Material: Material
  }
}

export function Palette() {
  const { nodes } = useGLTF("/palette3.glb") as GLTFResult
  return (
    <group dispose={null} rotation={[-0.2, 1.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desk.geometry}
        material={nodes.Desk.material}
        position={[0.06, 2.09, -0.42]}
        rotation={[1.06, -0.83, 0.43]}
        scale={[3, 1, 4.15]}
      >
        <meshToonMaterial color={"#36E3F1"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.color1.geometry}
        material={nodes.color1.material}
        position={[2.66, 3.48, -0.14]}
        rotation={[1.06, -0.83, 0.43]}
        scale={[0.67, 0.4, 0.67]}
      >
        <meshToonMaterial color={"#DFDC3C"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.color.geometry}
        material={nodes.color.material}
        position={[-1.07, 3.13, -1.38]}
        rotation={[1.06, -0.83, 0.43]}
        scale={[0.72, 0.43, 0.72]}
      >
        <meshToonMaterial color={"#19A0C8"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.color2.geometry}
        material={nodes.color2.material}
        position={[-1.33, 0.4, 1.51]}
        rotation={[1.06, -0.83, 0.43]}
        scale={[0.68, 0.4, 0.68]}
      >
        <meshToonMaterial color={"#51EA39"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.color3.geometry}
        material={nodes.color3.material}
        position={[-2.11, 1.52, -0.09]}
        rotation={[1.06, -0.83, 0.43]}
        scale={[0.62, 0.37, 0.62]}
      >
        <meshToonMaterial color={"#F7B30C"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.color001.geometry}
        material={nodes.color001.material}
        position={[1, 4.08, -1.51]}
        rotation={[1.06, -0.83, 0.43]}
        scale={[0.79, 0.47, 0.79]}
      >
        <meshToonMaterial color={"#DA481E"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stick.geometry}
        material={nodes.stick.material}
        position={[0.11, 1.05, -0.72]}
        rotation={[-2.58, 0.07, -3.05]}
        scale={[-0.55, -1.59, -0.55]}
      >
        <meshToonMaterial color={"#5826DB"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stick2.geometry}
        material={nodes.stick2.material}
        position={[0.32, 2.99, 0.52]}
        rotation={[0.56, -0.07, -0.09]}
        scale={[0.43, 0.72, 0.43]}
      >
        <meshToonMaterial color={"#E5CA65"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tassel.geometry}
        material={nodes.tassel.material}
        position={[0.41, 3.99, 1.18]}
        rotation={[0.56, -0.07, -0.09]}
        scale={0.55}
      >
        <meshToonMaterial color={"#EAEAEA"} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/palette3.glb")
