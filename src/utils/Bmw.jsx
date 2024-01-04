import React, { useRef, useLayoutEffect, useEffect } from "react";
import { applyProps } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Bmw(props) {
  const { nodes, materials } = useGLTF("https://dl.dropbox.com/scl/fi/rmvzpba30ewtcxekzfmj4/bmw_8_car.glb?rlkey=aoltw9cxhcwvatng3jgt9ca6f");
  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
    // applyProps(materials.Specular_Railing, { color: '#222', roughness: 0.2, roughnessMap: null, normalScale: [4, 4] })
    // applyProps(materials.Glass_Windows, { color: 'black', roughness: 0.1, clearcoat: 0.1 })
    // applyProps(materials.PANARAMA, { color: 'black', roughness: 0.1, clearcoat: 0.1 })
    applyProps(materials.vm_T3_024_brake_disc, { envMapIntensity: 2, reflectivity: 1, roughness: 0.1, metalness: 0.8, color: '#121212' })
    // applyProps(materials.Mirrors_color, { envMapIntensity: 4, roughness: 0.5, metalness: 1 })
    applyProps(materials.vm_T3_001_carpaint, { envMapIntensity: 2, clearCoat: 1, roughness: 0.4, metalness: 0.9, color: '#DBDBF1' })
    applyProps(materials.vm_T3_024_black_plastic_glossy, { specular: 0.5, color: '#222', metalness: 0.3, roughness: 0.2,  })
    applyProps(materials.vm_T3_024_led_light, { color: [ 1.5, 1, 4 ], emissive: 'white', emissiveIntensity: 12, toneMapped: false })
    // applyProps(materials.Glass_backlights, { color: '#1F1616', roughness: 0.2, clearcoat: 0.5 })
    // applyProps(materials.Kuzov_black_color, { color: 'black', roughness: 0.2, clearcoat: 0.1 })
  }, [nodes, materials])

  useEffect(() => {

    // COLORS LIBRARY
    let silverColor = { r: 0.41789, g: 0.41789, b: 0.41789 }
    let blueColor = { r: 0.028426039499072558, g: 0.1844749944900301, b: 0.514917665367466 }
    let yellowColor = { r: 0.85499, g: 0.50888, b: 0.00335 }
    let redColor = { r: 0.53328, g: 0.00402, b: 0.01521 }
    let greenColor = { r: 0.00972, g: 0.13014, b: 0.02843 }
    let whiteColor = { r: 1, g: 1, b: 1 }
    let blackColor = { r: 0.00402, g: 0.00402, b: 0.00402 }
    let purpleColor = { r: 0.18782, g: 0.18782, b: 0.18782 }

    let colorMap = {

        silverColor,
        blueColor,
        yellowColor,
        redColor,
        greenColor,
        whiteColor,
        blackColor,
        purpleColor

    }
    
    // TIMELINE VARS
    const ease = 'power4.out'
    const duration = 1

    const colorBtns = document.querySelectorAll('.color-btn')
    colorBtns.forEach( btn => {

        btn.addEventListener('click', () => {

            // Remove all active states
            colorBtns.forEach( btn => {
                btn.classList.remove('active')
            })

            // Active button
            btn.classList.add('active')

            // Change color
            let colorVarName = btn.getAttribute('color-paint')
            let selectedColor = colorMap[ colorVarName ]

            let tl = gsap.timeline({
                defaults: {
                    duration: duration,
                    ease: ease
                }
            })
            tl.to(materials.vm_T3_001_carpaint.color, {
                r: selectedColor.r,
                g: selectedColor.g,
                b: selectedColor.b,
            })

        })

    })

  })

return (
    <group {...props} dispose={null}>
      <group>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.Material_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.Material_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.vm_T3_000_BluePlasticGlossy}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.vm_T3_001_carpaint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.vm_T3_024_aluminum}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_52.geometry}
            material={materials.vm_T3_024_backlight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.vm_T3_024_black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.vm_T3_024_black_plastic_glossy}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials.vm_T3_024_brake_disc}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.vm_T3_024_caliper}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.vm_T3_024_chrome}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_48.geometry}
            material={materials.vm_T3_024_glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.vm_T3_024_glass_windows}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.vm_T3_024_interior}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_50.geometry}
            material={materials.vm_T3_024_led_light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.vm_T3_024_plate}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials.vm_T3_024_Rim}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46.geometry}
            material={materials.vm_T3_024_sidewall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44.geometry}
            material={materials.vm_T3_024_tire_tread}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials.vm_T3_028_dark_glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.vm_T3_028_plastic_black_matt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.vp_Free_bmw8_light_blue_logo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.vp_Free_bmw8_red_logo}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("https://dl.dropbox.com/scl/fi/rmvzpba30ewtcxekzfmj4/bmw_8_car.glb?rlkey=aoltw9cxhcwvatng3jgt9ca6f");
