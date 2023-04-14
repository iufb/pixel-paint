import { Ground } from "./Ground"
import { Palette } from "./Palette"

export const Scene = () => {
  return (
    <>
      <directionalLight
        color="white"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        position={[15, 15, 15]}
      />
      <Palette />
      <Ground />
    </>
  )
}
