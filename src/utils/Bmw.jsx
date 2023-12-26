import React, { useLayoutEffect } from "react";
import { applyProps } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";

export default function Bmw(props) {
  const { nodes, materials } = useGLTF("https://dl.dropbox.com/scl/fi/9ver34ngp95imh7b7yqw7/bmw-test.glb?rlkey=yjj3z3qysnzxt9mr89c0wcy9z");
//   useLayoutEffect(() => {
//     Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
//     applyProps(materials.Specular_Railing, { color: '#222', roughness: 0.2, roughnessMap: null, normalScale: [4, 4] })
//     applyProps(materials.Glass_Windows, { color: 'black', roughness: 0.1, clearcoat: 0.1 })
//     applyProps(materials.PANARAMA, { color: 'black', roughness: 0.1, clearcoat: 0.1 })
//     applyProps(materials.Koles_mat_Spec, { envMapIntensity: 3, roughness: 0.4, metalness: 1 })
//     applyProps(materials.Mirrors_color, { envMapIntensity: 4, roughness: 0.5, metalness: 1 })
//     applyProps(materials.Kuzov_Main_color, { envMapIntensity: 2, roughness: 0.35, metalness: 0.4, color: '#adadad' })
//     applyProps(materials.Tire_mat_texture, { color: '#222', roughness: 0.4, roughnessMap: null, normalScale: [4, 4] })
//     applyProps(materials.Back_lights_emissive_color_01, { color: 'red', roughness: 0.45, roughnessMap: null, normalScale: [4, 4] })
//     applyProps(materials.Glass_backlights, { color: '#1F1616', roughness: 0.2, clearcoat: 0.5 })
//     applyProps(materials.Kuzov_black_color, { color: 'black', roughness: 0.2, clearcoat: 0.1 })
//   }, [nodes, materials])

return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 200, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={190}
        >
          <group
            position={[1.14, 0.015, -0.811]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle019_Car_Paint_0.geometry}
              material={materials.Car_Paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle019_Car_Paint_0001.geometry}
              material={materials.Car_Paint}
            />
          </group>
          <group
            position={[-0.316, 0.015, -0.599]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle055_Car_Paint_0.geometry}
              material={materials.Car_Paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle055_Car_Paint_0001.geometry}
              material={materials.Car_Paint}
            />
          </group>
          <group
            position={[-0.626, 0.482, -0.876]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle068_black222_0.geometry}
              material={materials.black222}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle068_Car_plastic_dark_0.geometry}
              material={materials.Car_plastic_dark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle068_Iron_Clean_Distorted_0.geometry}
              material={materials.Iron_Clean_Distorted}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle068_logo_0.geometry}
              material={materials.logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle068_Material_#1112_0"].geometry}
              material={materials.Material_1112}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle068_Material_#2125659471_0"].geometry}
              material={materials.Material_2125659471}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle068_Material_#2125696012_0"].geometry}
              material={materials.Material_2125696012}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle068_Material_#2125696013_0"].geometry}
              material={materials.Material_2125696013}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle068_Material_#2125696015_0"].geometry}
              material={materials.Material_2125696015}
            />
          </group>
          <group
            position={[-0.626, -0.453, -0.876]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle070_black222_0.geometry}
              material={materials.black222}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle070_Car_plastic_dark_0.geometry}
              material={materials.Car_plastic_dark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle070_Iron_Clean_Distorted_0.geometry}
              material={materials.Iron_Clean_Distorted}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle070_logo_0.geometry}
              material={materials.logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle070_Material_#1112_0"].geometry}
              material={materials.Material_1112}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle070_Material_#2125659471_0"].geometry}
              material={materials.Material_2125659471}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle070_Material_#2125696012_0"].geometry}
              material={materials.Material_2125696012}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle070_Material_#2125696013_0"].geometry}
              material={materials.Material_2125696013}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Circle070_Material_#2125696015_0"].geometry}
              material={materials.Material_2125696015}
            />
          </group>
          <group
            position={[0.866, 0.483, -0.876]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line005_111_0.geometry}
              material={materials.material_34}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line005_black001_0.geometry}
              material={materials["black.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line005_black002_0.geometry}
              material={materials["black.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line005_Car_plastic_dark_0.geometry}
              material={materials.Car_plastic_dark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line005_logo_0.geometry}
              material={materials.logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line005_Material_#1112_0"].geometry}
              material={materials.Material_1112}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line005_Material_#111_0"].geometry}
              material={materials.Material_111}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line005_Material_#2125659012_0"].geometry}
              material={materials.Material_2125659012}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line005_Material_#2125659471_0"].geometry}
              material={materials.Material_2125659471}
            />
          </group>
          <group
            position={[-1.144, 0.015, -0.563]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Logo_Mesh002_logo_0.geometry}
              material={materials.logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Logo_Mesh002_Material_#2125659471_0"].geometry}
              material={materials.Material_2125659471}
            />
          </group>
          <group
            position={[1.273, 0.015, -0.69]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Logo_Mesh003_logo_0.geometry}
              material={materials.logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Logo_Mesh003_Material_#2125659471_0"].geometry}
              material={materials.Material_2125659471}
            />
          </group>
          <group
            position={[0.866, -0.454, -0.876]}
            rotation={[0, 0, Math.PI]}
            scale={-0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object442_111_0.geometry}
              material={materials.material_34}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object442_black001_0.geometry}
              material={materials["black.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object442_black002_0.geometry}
              material={materials["black.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object442_Car_plastic_dark_0.geometry}
              material={materials.Car_plastic_dark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object442_logo_0.geometry}
              material={materials.logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object442_Material_#1112_0"].geometry}
              material={materials.Material_1112}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object442_Material_#111_0"].geometry}
              material={materials.Material_111}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object442_Material_#2125659012_0"].geometry}
              material={materials.Material_2125659012}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object442_Material_#2125659471_0"].geometry}
              material={materials.Material_2125659471}
            />
          </group>
          <group
            position={[-1.118, 0.014, -0.643]}
            rotation={[0, -0.039, Math.PI]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object_11_04_-_Default_0"].geometry}
              material={materials["04_-_Default"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11_black_0.geometry}
              material={materials.black}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["24698910__11603P001_Car_plastic_dark_0"].geometry}
            material={materials.Car_plastic_dark}
            position={[-1.45, -0.958, -1.05]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_Car_Paint_0.geometry}
            material={materials.Car_Paint}
            position={[-0.966, 0.015, -0.765]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_Car_chrome_0.geometry}
            material={materials.Car_chrome}
            position={[1.286, 0.015, -0.81]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-1.143, 0.015, -0.861]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_Car_chrome_0.geometry}
            material={materials.Car_chrome}
            position={[0.869, 0.015, -0.585]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_Car_plastic_dark_0.geometry}
            material={materials.Car_plastic_dark}
            position={[0.867, 0.015, -0.584]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle005_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.261, 0.015, -0.81]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-0.983, 0.015, -0.899]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_Material005_0.geometry}
            material={materials["Material.005"]}
            position={[-0.983, 0.015, -0.899]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle008_Car_chrome_0.geometry}
            material={materials.Car_chrome}
            position={[-0.151, 0.015, -0.345]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle009_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.211, 0.015, -0.878]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle010_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.227, 0.015, -0.751]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle011_Glass001_0.geometry}
            material={materials["Glass.001"]}
            position={[1.134, 0.015, -0.704]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle012_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.215, 0.015, -0.965]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle013_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[-0.983, 0.015, -0.899]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle014_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.181, 0.015, -0.897]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle015_Material007_0.geometry}
            material={materials["Material.007"]}
            position={[0.14, 0.015, -0.933]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle016_Car_Paint_0.geometry}
            material={materials.Car_Paint}
            position={[-1.118, 0.015, -0.658]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle017_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[0.119, 0.015, -0.95]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle018_Car_Paint_0.geometry}
            material={materials.Car_Paint}
            position={[0.772, 0.015, -0.732]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle020_Car_plastic_dark_0.geometry}
            material={materials.Car_plastic_dark}
            position={[-0.171, 0.015, -0.354]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle021_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[-1.143, 0.015, -0.861]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle023_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[-1.076, 0.015, -0.894]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle024_Car_plastic_dark_0.geometry}
            material={materials.Car_plastic_dark}
            position={[1.287, 0.015, -0.825]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle026_red_0.geometry}
            material={materials.material}
            position={[1.089, 0.015, -0.956]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle029_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.133, 0.015, -0.706]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle030_Car_Paint_0.geometry}
            material={materials.Car_Paint}
            position={[0.868, 0.015, -0.615]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle031_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.116, 0.015, -0.707]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle032_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[0.592, 0.015, -0.695]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle033_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-1.012, 0.015, -0.612]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle034_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.134, 0.015, -0.875]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle035_red_0.geometry}
            material={materials.material}
            position={[-1.043, 0.015, -0.631]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle036_red_0.geometry}
            material={materials.material}
            position={[-1.097, 0.015, -0.619]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle037_Glass001_0.geometry}
            material={materials["Glass.001"]}
            position={[-1.015, 0.015, -0.612]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle038_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-1.071, 0.015, -0.642]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle039_Red_Light_0.geometry}
            material={materials.Red_Light}
            position={[-1.072, 0.015, -0.642]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle040_Material_#21256791443_0"].geometry}
            material={materials.Material_21256791443}
            position={[-1.042, 0.015, -0.805]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle041_steel2_0.geometry}
            material={materials.steel2}
            position={[-1.101, 0.015, -0.619]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle042_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-1.04, 0.015, -0.805]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle043_red2_0.geometry}
            material={materials.red2}
            position={[-1.039, 0.015, -0.805]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle044_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-1.073, 0.015, -0.627]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle045_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-1.071, 0.015, -0.627]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle046_Material_#2125672888_0"].geometry}
            material={materials.Material_2125672888}
            position={[1.275, -0.211, -0.81]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle047_Car_plastic_dark_0.geometry}
            material={materials.Car_plastic_dark}
            position={[1.124, 0.015, -0.801]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle049_Material_#2125672888_0"].geometry}
            material={materials.Material_2125672888}
            position={[-1.074, 0.015, -0.785]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle051_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[-0.074, 0.015, -0.469]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle052_Car_Paint_0.geometry}
            material={materials.Car_Paint}
            position={[-1.018, 0.015, -0.543]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle053_Car_Paint_0.geometry}
            material={materials.Car_Paint}
            position={[0.149, 0.015, -0.73]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle054_Car_Paint_0.geometry}
            material={materials.Car_Paint}
            position={[0.112, 0.015, -0.891]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle057_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.327, 0.015, -0.464]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle058_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.385, 0.015, -0.474]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle059_Glass001_0.geometry}
            material={materials["Glass.001"]}
            position={[0.386, 0.015, -0.471]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle060_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-0.72, 0.015, -0.445]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle061_Glass001_0.geometry}
            material={materials["Glass.001"]}
            position={[-0.721, 0.015, -0.442]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle065_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-0.036, 0.015, -0.693]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle066_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-0.171, 0.015, -0.384]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle067_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.129, 0.015, -0.456]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cleaners_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.565, 0.027, -0.565]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["interior001_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.003, 0.015, -0.654]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["interior002_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-0.636, 0.015, -0.667]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text003_black2_0.geometry}
            material={materials.black2}
            position={[1.287, 0.087, -0.749]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text004_Car_chrome_0.geometry}
            material={materials.Car_chrome}
            position={[1.285, 0.115, -0.749]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text005_red_0.geometry}
            material={materials.material}
            position={[1.287, 0.094, -0.749]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text006_black3_0.geometry}
            material={materials.black3}
            position={[1.287, 0.09, -0.749]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text008_black2_0.geometry}
            material={materials.black2}
            position={[0.61, 0.479, -0.695]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text009_red_0.geometry}
            material={materials.material}
            position={[0.599, 0.479, -0.695]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text010_red_0.geometry}
            material={materials.material}
            position={[0.605, 0.479, -0.695]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text011_black3_0.geometry}
            material={materials.black3}
            position={[0.607, 0.479, -0.695]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text012_red_0.geometry}
            material={materials.material}
            position={[-1.134, -0.145, -0.571]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text014_black2_0.geometry}
            material={materials.black2}
            position={[-1.136, -0.137, -0.571]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text015_red_0.geometry}
            material={materials.material}
            position={[-1.129, -0.174, -0.571]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text016_black3_0.geometry}
            material={materials.black3}
            position={[-1.135, -0.141, -0.571]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text017_red_0.geometry}
            material={materials.material}
            position={[0.599, -0.449, -0.695]}
            rotation={[0, 0, 0.005]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text018_red_0.geometry}
            material={materials.material}
            position={[0.592, -0.45, -0.695]}
            rotation={[0, 0, 0.005]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text019_black3_0.geometry}
            material={materials.black3}
            position={[0.59, -0.45, -0.695]}
            rotation={[0, 0, 0.005]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Text020_black2_0.geometry}
            material={materials.black2}
            position={[0.588, -0.45, -0.695]}
            rotation={[0, 0, 0.005]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath001_red_0.geometry}
            material={materials.material}
            position={[-1.114, 0.015, -0.6]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath005_red_0.geometry}
            material={materials.material}
            position={[-1.018, 0.015, -0.613]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath014_Red_Light_0.geometry}
            material={materials.Red_Light}
            position={[-1.114, 0.015, -0.6]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath015_Red_Light_0.geometry}
            material={materials.Red_Light}
            position={[-1.021, 0.015, -0.613]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Car_plastic_dark_0.geometry}
            material={materials.Car_plastic_dark}
            position={[1.255, 0.015, -0.817]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Car_plastic_dark_0.geometry}
            material={materials.Car_plastic_dark}
            position={[1.267, 0.015, -0.818]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_glasss2222_0.geometry}
            material={materials.glasss2222}
            position={[1.147, 0.015, -0.71]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane004_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.155, 0.015, -0.689]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane005_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.055, 0.015, -0.705]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane006_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.115, 0.015, -0.71]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_lightt_0.geometry}
            material={materials.lightt}
            position={[1.158, 0.015, -0.71]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_steel2_0.geometry}
            material={materials.steel2}
            position={[1.148, 0.015, -0.707]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_Chrome1111_0.geometry}
            material={materials.Chrome1111}
            position={[1.134, 0.015, -0.71]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane010_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.071, 0.015, -0.68]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane011_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[1.128, 0.015, -0.7]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_Car_Paint_001_0.geometry}
            material={materials["Car_Paint_.001"]}
            position={[1.128, 0.015, -0.707]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane013_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.128, 0.015, -0.712]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane015_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[1.12, 0.015, -0.718]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane016_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.136, 0.015, -0.718]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane017_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.145, 0.015, -0.703]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018_Chrome1111_0.geometry}
            material={materials.Chrome1111}
            position={[1.153, 0.015, -0.703]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_Chrome1111_0.geometry}
            material={materials.Chrome1111}
            position={[1.144, 0.015, -0.718]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane020_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.173, 0.015, -0.735]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane021_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.206, 0.015, -0.719]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_steel2_0.geometry}
            material={materials.steel2}
            position={[1.206, 0.015, -0.719]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane023_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.071, 0.015, -0.729]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane024_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.098, 0.015, -0.702]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane025_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.231, 0.015, -0.809]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane027_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.595, 0.479, -0.695]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane028_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[1.179, 0.015, -0.89]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane029_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-0.998, 0.015, -0.61]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane030_red_0.geometry}
            material={materials.material}
            position={[-0.933, 0.439, -0.608]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane032_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-1.128, -0.18, -0.571]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane033_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[0.326, 0.015, -0.531]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane039_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.29, 0.015, -0.516]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane042_steel2_0.geometry}
            material={materials.steel2}
            position={[0.312, 0.015, -0.511]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane043_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[0.374, 0.015, -0.523]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane044_mirror_0.geometry}
            material={materials.mirror}
            position={[0.291, 0.015, -0.516]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane053_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.557, 0.015, -0.568]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane057_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.079, 0.015, -0.825]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane059_Material008_0.geometry}
            material={materials["Material.008"]}
            position={[1.285, 0.12, -0.749]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane061_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-0.532, 0.015, -0.458]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane065_Glass001_0.geometry}
            material={materials["Glass.001"]}
            position={[0.064, 0.015, -0.463]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane066_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[-0.392, 0.015, -0.46]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane076_Glass001_0.geometry}
            material={materials["Glass.001"]}
            position={[-0.392, 0.015, -0.459]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Plane294_Material_#2125684715_0"].geometry}
            material={materials.Material_2125684715}
            position={[0.602, -0.449, -0.695]}
            rotation={[0, 0, 0.005]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["rchk001_Material_#2125672888_0"].geometry}
            material={materials.Material_2125672888}
            position={[-0.099, 0.015, -0.624]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["wing_Material_#2125659471_0"].geometry}
            material={materials.Material_2125659471}
            position={[-0.451, 0.015, -0.349]}
            rotation={[0, 0, Math.PI]}
            scale={0.001}
          />
        </group>
        <group
          position={[248.4, 46.473, -2.791]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["license-plate"].geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["license-plate-outer"].geometry}
            material={materials["04_-_Default"]}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/mini_hatch_cooper_s.glb");
