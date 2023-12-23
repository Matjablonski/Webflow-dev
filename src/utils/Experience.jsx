import * as THREE from 'three'
import React from 'react'
import { useRef, useEffect, useState, useMemo } from "react"
import { useFrame, useThree } from '@react-three/fiber'
import { Html, CameraControls, AccumulativeShadows, Environment, Lightformer, RandomizedLight, Float } from "@react-three/drei"
import { LayerMaterial, Color, Depth } from 'lamina'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useControls } from 'leva'

import Model from "./Model"

export default function Experience() {

    // const { position } = useControls({
    //     position: {
    //         value: { x: 0.15, y: 0.2, z: 2.2 },
    //         step: 0.05
    //     }
    // })

    const [degraded, degrade] = useState(false)
    const [hidden, set] = useState()
    const car = useRef()
    const cameraControl = useRef()
    const btn = document.querySelector('.btn')
    const { gl } = useThree()

    let status = false
    let camera = useThree((state) => state.camera)

    useEffect((state) => {

        cameraControl.current.disconnect()

        btn.addEventListener('click', () => {

            // let p = camera.position.clone()
            // cameraControl.current.reset()
            // cameraControl.current.disconnect()
            if ( status === false ) {
                cameraControl.current.connect( gl.domElement )
                status = true
                return
            } else if ( status === true ) {
                cameraControl.current.disconnect()
                status = false
                return
            }
            console.log(status)
            // cameraControl.current.enabled = true
            // console.log('clicked')
            // camera.position.copy(p)

        }, [ camera ])

    })

    // const [target] = useState(() => new THREE.Object3D())
    // const carLight = useRef()
    // const spotlight = useMemo(() => new THREE.SpotLight('#fff'), [])
    // useHelper(carLight, THREE.SpotLightHelper, 'yellow')

    // carLight.current.lookAt(0, 0, 15)

    return <>

        <CameraControls 
            ref={cameraControl} 
            enabled={true} 
            smoothTime={0.45} 
            boundaryEnclosesCamera={true} 
            maxDistance={14} 
            minDistance={6} 
            minPolarAngle={0.4} 
            maxPolarAngle={Math.PI * 0.5} 
        />

        <spotLight 
            position={[0, 15, 0]} 
            angle={0.3} 
            penumbra={1} 
            castShadow 
            intensity={2} 
            shadow-bias={-0.0001} 
        />

        <ambientLight intensity={0.5} />

        <mesh ref={ car } position={[0, -1, 0]}>
            <Model scale={1.6} rotation={[0, Math.PI / 5, 0]} />
            {/* <Html 
                position={[2.5, 1, 0]}
                wrapperClass='label'
                distanceFactor={ 8 }
                occlude={ car }
                // onOcclude={set}
                // style={{
                //     transition: 'all 0.5s',
                //     opacity: hidden ? 0 : 1,
                //     transform: `scale(${hidden ? 0.5 : 1})`
                // }}
                center
            >
                Wheels
            </Html>
            <Html 
                position={[1, 1.5, -2.5]}
                wrapperClass='label'
                distanceFactor={ 8 }
                occlude={ car }
                center
            >
                Charging
            </Html>
            <Html 
                position={[-2.6, 1, -0.2]}
                wrapperClass='label'
                distanceFactor={ 8 }
                occlude={ car }
                center
            >
                LED Lights
            </Html> */}
        </mesh>

        <AccumulativeShadows position={[0, -1, 0]} frames={100} alphaTest={0.8} scale={10}>
            <RandomizedLight amount={8} radius={8} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>

        <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
            <Lightformers />
        </Environment>

        <CameraRig />

    </>
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
    const group = useRef()
    useFrame((state, delta) => (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60))
    return (
      <>
        {/* Ceiling */}
        <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        <group rotation={[0, 0.5, 0]}>
          <group ref={group}>
            {positions.map((x, i) => (
              <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
            ))}
          </group>
        </group>
        {/* Sides */}
        <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
        <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
        <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
        {/* Accent (red) */}
        <Float speed={5} floatIntensity={2} rotationIntensity={2}>
          <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
        </Float>
        {/* Background */}
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Color color="#444" alpha={1} mode="normal" />
            <Depth colorA="blue" colorB="black" alpha={0.5} mode="normal" near={0} far={400} origin={[100, 100, 100]} />
          </LayerMaterial>
        </mesh>
      </>
    )
}

function CameraRig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
        const t = state.clock.elapsedTime
        state.camera.position.lerp(v.set(Math.sin(t / 30), Math.sin(t / 5) * 0.5, 12 + Math.cos(t / 5) * 2), 0.04)
        state.scene.rotation.y += 0.0003
        state.camera.lookAt(0, 0, 0)
    })
  }