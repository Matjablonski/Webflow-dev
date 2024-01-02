import React, { useRef, useLayoutEffect } from "react";
import { applyProps } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";

export default function Bmw(props) {
  const { nodes, materials } = useGLTF("https://dl.dropbox.com/scl/fi/7ulww0dgt2otv65ipathu/bmw-car.glb?rlkey=5b5b4jfj3l7os15hepmjmants");
//   useLayoutEffect(() => {
//     Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
//     // applyProps(materials.Specular_Railing, { color: '#222', roughness: 0.2, roughnessMap: null, normalScale: [4, 4] })
//     // applyProps(materials.Glass_Windows, { color: 'black', roughness: 0.1, clearcoat: 0.1 })
//     // applyProps(materials.PANARAMA, { color: 'black', roughness: 0.1, clearcoat: 0.1 })
//     // applyProps(materials.Koles_mat_Spec, { envMapIntensity: 3, roughness: 0.4, metalness: 1 })
//     // applyProps(materials.Mirrors_color, { envMapIntensity: 4, roughness: 0.5, metalness: 1 })
    applyProps(materials.f31_body, { envMapIntensity: 2, clearCoat: 1, roughness: 0.4, metalness: 0.9, color: '#adadad' })
//     // applyProps(materials.Tire_mat_texture, { color: '#222', roughness: 0.4, roughnessMap: null, normalScale: [4, 4] })
//     // applyProps(materials.Back_lights_emissive_color_01, { color: 'red', roughness: 0.45, roughnessMap: null, normalScale: [4, 4] })
//     // applyProps(materials.Glass_backlights, { color: '#1F1616', roughness: 0.2, clearcoat: 0.5 })
//     // applyProps(materials.Kuzov_black_color, { color: 'black', roughness: 0.2, clearcoat: 0.1 })
//   }, [nodes, materials])

return (
    <group {...props} dispose={null}>
      <group
        name="Sketchfab_model"
        // position={[0, -30, -0.2]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      >
        <group
          name="023e8425fb6c4797a96eba4d37f00d15fbx"
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            name="black_f31_black_0"
            castShadow
            receiveShadow
            geometry={nodes.black_f31_black_0.geometry}
            material={materials.f31_black}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black0_f31_black_0"
            castShadow
            receiveShadow
            geometry={nodes.black0_f31_black_0.geometry}
            material={materials.f31_black}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black05_f31_black_0"
            castShadow
            receiveShadow
            geometry={nodes.black05_f31_black_0.geometry}
            material={materials.f31_black}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black1_f31_black_0"
            castShadow
            receiveShadow
            geometry={nodes.black1_f31_black_0.geometry}
            material={materials.f31_black}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black11_f31_black_0"
            castShadow
            receiveShadow
            geometry={nodes.black11_f31_black_0.geometry}
            material={materials.f31_black}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black2_f31_black_0"
            castShadow
            receiveShadow
            geometry={nodes.black2_f31_black_0.geometry}
            material={materials.f31_black}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black3_f31_black_0"
            castShadow
            receiveShadow
            geometry={nodes.black3_f31_black_0.geometry}
            material={materials.f31_black}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black4_f31_black_0"
            castShadow
            receiveShadow
            geometry={nodes.black4_f31_black_0.geometry}
            material={materials.f31_black}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black_m_f31_black_m_0"
            castShadow
            receiveShadow
            geometry={nodes.black_m_f31_black_m_0.geometry}
            material={materials.f31_black_m}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black_m0_f31_black_m_0"
            castShadow
            receiveShadow
            geometry={nodes.black_m0_f31_black_m_0.geometry}
            material={materials.f31_black_m}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="black_m1_f31_black_m_0"
            castShadow
            receiveShadow
            geometry={nodes.black_m1_f31_black_m_0.geometry}
            material={materials.f31_black_m}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body00_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body00_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body01_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body01_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body02_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body02_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body03_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body03_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body04_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body04_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body05_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body05_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body06_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body06_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body07_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body07_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body08_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body08_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body09_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body09_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body10_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body10_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="body11_f31_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body11_f31_body_0.geometry}
            material={materials.f31_body}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome_f31_mirror_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome_f31_mirror_0.geometry}
            material={materials.f31_mirror}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome0_f31_mirror_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome0_f31_mirror_0.geometry}
            material={materials.f31_mirror}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome00_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome00_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome01_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome01_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome02_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome02_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome03_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome03_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome04_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome04_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome05_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome05_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome06_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome06_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome07_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome07_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome08_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome08_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome09_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome09_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome1_f31_mirror_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome1_f31_mirror_0.geometry}
            material={materials.f31_mirror}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome10_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome10_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome11_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome11_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome12_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome12_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome13_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome13_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome14_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome14_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome15_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome15_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome16_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome16_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome17_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome17_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome18_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome18_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome19_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome19_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome2_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome2_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome20_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome20_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome21_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome21_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome22_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome22_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome23_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome23_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome24_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome24_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome25_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome25_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome26_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome26_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome27_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome27_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome28_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome28_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome29_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome29_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome30_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome30_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome31_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome31_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome32_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome32_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome33_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome33_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome34_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome34_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome35_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome35_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome36_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome36_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome37_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome37_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome38_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome38_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome39_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome39_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome40_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome40_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome41_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome41_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome42_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome42_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome43_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome43_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome44_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome44_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome45_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome45_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome46_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome46_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome47_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome47_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome48_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome48_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome49_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome49_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome50_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome50_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome51_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome51_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome52_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome52_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome53_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome53_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome54_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome54_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome55_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome55_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome56_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome56_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome57_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome57_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome58_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome58_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome74_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome74_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome75_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome75_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome76_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome76_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome77_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome77_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome78_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome78_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome79_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome79_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome80_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome80_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome81_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome81_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome82_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome82_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome83_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome83_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome84_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome84_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome85_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome85_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome86_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome86_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome87_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome87_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome88_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome88_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome89_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome89_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome90_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome90_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome91_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome91_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome92_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome92_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome93_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome93_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="chrome94_f31_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome94_f31_chrome_0.geometry}
            material={materials.f31_chrome}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="d_glass_f31_d_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.d_glass_f31_d_glass_0.geometry}
            material={materials.f31_d_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="d_glass0_f31_d_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.d_glass0_f31_d_glass_0.geometry}
            material={materials.f31_d_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="d_glass01_f31_d_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.d_glass01_f31_d_glass_0.geometry}
            material={materials.f31_d_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="d_glass05_f31_d_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.d_glass05_f31_d_glass_0.geometry}
            material={materials.f31_d_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="d_glass06_f31_d_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.d_glass06_f31_d_glass_0.geometry}
            material={materials.f31_d_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="d_glass07_f31_d_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.d_glass07_f31_d_glass_0.geometry}
            material={materials.f31_d_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="d_glass08_f31_d_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.d_glass08_f31_d_glass_0.geometry}
            material={materials.f31_d_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass_f31_w_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass_f31_w_glass_0.geometry}
            material={materials.f31_w_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass0_f31_w_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass0_f31_w_glass_0.geometry}
            material={materials.f31_w_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass00_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass00_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass01_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass01_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass02_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass02_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass03_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass03_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass04_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass04_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass05_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass05_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass06_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass06_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass07_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass07_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass08_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass08_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="glass09_f31_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.glass09_f31_glass_0.geometry}
            material={materials.f31_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum00_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum00_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum01_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum01_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum02_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum02_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum03_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum03_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum04_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum04_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum05_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum05_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum06_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum06_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum07_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum07_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum08_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum08_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum09_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum09_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum10_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum10_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum11_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum11_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum12_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum12_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum13_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum13_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum14_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum14_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum15_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum15_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum16_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum16_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum17_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum17_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum18_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum18_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum19_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum19_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum20_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum20_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum21_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum21_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum22_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum22_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum23_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum23_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum24_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum24_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum25_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum25_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum26_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum26_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum27_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum27_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum28_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum28_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum29_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum29_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum30_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum30_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum31_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum31_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum32_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum32_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum35_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum35_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum36_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum36_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum38_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum38_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum40_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum40_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum41_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum41_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum42_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum42_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum43_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum43_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum44_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum44_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum45_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum45_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum46_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum46_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum47_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum47_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum48_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum48_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum49_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum49_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum50_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum50_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum51_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum51_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum53_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum53_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum54_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum54_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum61_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum61_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum62_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum62_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum63_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum63_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum64_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum64_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum65_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum65_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum66_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum66_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum67_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum67_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="gum68_f31_gum_0"
            castShadow
            receiveShadow
            geometry={nodes.gum68_f31_gum_0.geometry}
            material={materials.f31_gum}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="interior1_f31_interior1_0"
            castShadow
            receiveShadow
            geometry={nodes.interior1_f31_interior1_0.geometry}
            material={materials.f31_interior1}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="interior2_f31_interior2_0"
            castShadow
            receiveShadow
            geometry={nodes.interior2_f31_interior2_0.geometry}
            material={materials.f31_interior2}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="interior3_f31_interior3_0"
            castShadow
            receiveShadow
            geometry={nodes.interior3_f31_interior3_0.geometry}
            material={materials.f31_interior3}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather00_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather00_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather01_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather01_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather02_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather02_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather03_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather03_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather04_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather04_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather05_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather05_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather06_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather06_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather07_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather07_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather08_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather08_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather09_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather09_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather10_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather10_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="leather11_f31_leather_0"
            castShadow
            receiveShadow
            geometry={nodes.leather11_f31_leather_0.geometry}
            material={materials.f31_leather}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="logo00_Material_#4_0"
            castShadow
            receiveShadow
            geometry={nodes["logo00_Material_#4_0"].geometry}
            material={materials.Material_4}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="logo01_Material_#2_0"
            castShadow
            receiveShadow
            geometry={nodes["logo01_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="logo02_Material_#3_0"
            castShadow
            receiveShadow
            geometry={nodes["logo02_Material_#3_0"].geometry}
            material={materials.Material_3}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="logo06_Material_#5_0"
            castShadow
            receiveShadow
            geometry={nodes["logo06_Material_#5_0"].geometry}
            material={materials.Material_5}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="logo07_Material_#7_0"
            castShadow
            receiveShadow
            geometry={nodes["logo07_Material_#7_0"].geometry}
            material={materials.Material_7}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="logo08_Material_#6_0"
            castShadow
            receiveShadow
            geometry={nodes["logo08_Material_#6_0"].geometry}
            material={materials.Material_6}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="logo09_Material_#8_0"
            castShadow
            receiveShadow
            geometry={nodes["logo09_Material_#8_0"].geometry}
            material={materials.Material_8}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="plate_f31_plate_0"
            castShadow
            receiveShadow
            geometry={nodes.plate_f31_plate_0.geometry}
            material={materials.f31_plate}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="plate1_f31_plate_0"
            castShadow
            receiveShadow
            geometry={nodes.plate1_f31_plate_0.geometry}
            material={materials.f31_plate}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="r_glass_f31_r_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.r_glass_f31_r_glass_0.geometry}
            material={materials.f31_r_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="r_glass00_f31_r_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.r_glass00_f31_r_glass_0.geometry}
            material={materials.f31_r_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="r_glass01_f31_r_glass_0"
            castShadow
            receiveShadow
            geometry={nodes.r_glass01_f31_r_glass_0.geometry}
            material={materials.f31_r_glass}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver0_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver0_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver00_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver00_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver01_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver01_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver02_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver02_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver03_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver03_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver04_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver04_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver05_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver05_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver06_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver06_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver07_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver07_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver08_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver08_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver09_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver09_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver10_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver10_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver11_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver11_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver12_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver12_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver13_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver13_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver14_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver14_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver15_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver15_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver16_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver16_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver17_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver17_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver18_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver18_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver19_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver19_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver20_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver20_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver21_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver21_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver22_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver22_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver23_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver23_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver39_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver39_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver41_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver41_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver42_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver42_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver43_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver43_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver44_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver44_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver45_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver45_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver46_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver46_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver47_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver47_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver48_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver48_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver49_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver49_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver50_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver50_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver51_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver51_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver52_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver52_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver53_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver53_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver54_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver54_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver55_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver55_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver56_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver56_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver57_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver57_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="silver58_f31_silver_0"
            castShadow
            receiveShadow
            geometry={nodes.silver58_f31_silver_0.geometry}
            material={materials.f31_silver}
            position={[2366.307, 0, 1218.262]}
            rotation={[Math.PI, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("https://dl.dropbox.com/scl/fi/7ulww0dgt2otv65ipathu/bmw-car.glb?rlkey=5b5b4jfj3l7os15hepmjmants");
