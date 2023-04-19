import { Ground } from "./Ground"
import { Palette } from "./Palette"

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        color="white"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        position={[45, 45, 25]}
      />
      <Palette />
      <Ground />
    </>
  )
}
