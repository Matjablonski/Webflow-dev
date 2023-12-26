import * as THREE from 'three'
import React from 'react'
import { useRef, useEffect, useState } from "react"
import gsap from 'gsap'
import { useFrame, useThree } from '@react-three/fiber'
import { Html, CameraControls, AccumulativeShadows, Environment, Lightformer, RandomizedLight, Float } from "@react-three/drei"
import { LayerMaterial, Color, Depth } from 'lamina'
import { useControls } from 'leva'

import Model from "./Model"

export default function Experience() {

    const { position } = useControls({
        position: {
            value: { x: 0, y: 2, z: 0 },
            step: 0.05
        }
    })

    const [degraded, degrade] = useState(false)
    const [hidden, set] = useState()
    const car = useRef()
    const cameraControl = useRef()
    const btn = document.querySelector('.btn')
    const { gl } = useThree()

    const wheels = useRef()
    const lights = useRef()
    const rlights = useRef()
    const roof = useRef()
    const light = useRef()
    // useHelper(light, THREE.SpotLightHelper, 'cyan')

    const distFactor = 7

    let status = false
    let camera = useThree((state) => state.camera)
    let scene = useThree((state) => state.scene)

    const wheelsPosition = [ 2.5, 1, 0 ]
    let tips, rotateScene

    useEffect(() => {

        const spotLight = light.current;
        const targetPosition = [0, 0, 4]; // Update with the desired target position
        spotLight.target.position.set(...targetPosition);

        // Animate scene
        let cam = gsap.timeline({ 
            repeat: -1, 
            yoyo: true, 
            yoyoEase: true,
            defaults: {
                duration: 10,
                ease: 'power1.inOut',
                // overwrite: true
            }
        })
        cam.to(scene.position, {
            // y: -0.2,
            z: 2,
        })
        .to(scene.rotation, {
            x: 0.1,
            overwrite: true
        }, '<')

        // Rotate scene
        rotateScene = gsap.timeline({
            repeat: -1
        })
        rotateScene.to(scene.rotation, {
            y: Math.PI * 2,
            ease: 'linear',
            duration: 160
        })

        // Show tooltips
        const labels = document.querySelectorAll('.label > div')
        tips = gsap.timeline({ paused: true })
        tips.from(labels, {
            scale: 1.5,
            autoAlpha: 0,
            stagger: 0.08,
            ease: 'expo.out',
            duration: 0.8
        })

        // Reverse cam
        function reverseCam() {

            let rev = gsap.timeline({
                defaults: {
                    duration: 1.2,
                    ease: 'expo.out'
                },
                onComplete: () => cam.revert()
            })
            rev.to(scene.position, {
                z: 0
            })
            .to(scene.rotation, {
                x: 0
            }, '<')

            return rev

        }

        // Toggle camera controls
        btn.addEventListener('click', () => {

            if ( status === !true ) {
                document.body.style.cursor = 'grab'
                tl.play()
                tips.play()
                rotateScene.pause()
                cam.pause()
                reverseCam()
                cameraControl.current.enabled = true
                cameraControl.current.connect( gl.domElement )
                status = true
            } else {
                document.body.style.cursor = 'default'
                tl.reverse()
                tips.reverse()
                rotateScene.play()
                cameraControl.current.disconnect()
                cameraControl.current.setPosition( 0, 0, 12, true )
                cameraControl.current.addEventListener('rest', disconnect)
                status = false
            }

        }, [ camera ])

        let bg = document.querySelector('.switch')
        let knob = document.querySelector('.knob')  
        
        function disconnect() {
            cam.timeScale(1).play()
            cameraControl.current.enabled = false
            cameraControl.current.removeEventListener('rest', disconnect)
        }

        // Animate button
        let tl = gsap.timeline({ 
            paused: true,
            defaults: {
                ease: 'back.inOut',
                duration: 0.6
            }
        })
        tl.to(bg, {
            backgroundColor: '#352EA8',
            ease: 'power3.inOut'
        })
        .to(knob, {
            xPercent: 100,
            backgroundColor: '#ededf5'
        }, '<')
        .to('.switch-txt.on, .switch-txt.off', {
            xPercent: 100,
            stagger: 0.1,
        }, '<')

        // Cursor change
        cameraControl.current.addEventListener( 'controlstart', function() {
            document.body.style.cursor = 'grabbing'
        })

        cameraControl.current.addEventListener( 'controlend', function() {
            document.body.style.cursor = 'grab'
        })

        const closeBtn = document.querySelector('.close-btn')
        closeBtn.addEventListener('click', () => {
            rotateScene.pause()
            tips.play()
            cameraControl.current.reset(true)
        })

    })

    return <>

        <CameraControls 
            ref={cameraControl} 
            enabled={false} 
            smoothTime={0.45} 
            boundaryEnclosesCamera={true} 
            maxDistance={14} 
            minDistance={6} 
            minPolarAngle={0.4} 
            maxPolarAngle={Math.PI * 0.5} 
        />

        <ambientLight intensity={1} />

        <spotLight 
            position={[0, 15, 0]} 
            angle={0.3} 
            penumbra={1} 
            castShadow 
            intensity={2} 
            shadow-bias={-0.0001} 
        />

        <spotLight
            position={[position.x, position.y, position.z]}
            ref={light}
            castShadow
            color={'yellow'}
            intensity={10}
            penumbra={0.5}
        />

        <mesh ref={ car } position={[0, -1, 0]}>
            <Model scale={1.6} rotation={[0, Math.PI / 5, 0]} />
            <Html 
                key='wheels'
                ref={wheels}
                position={wheelsPosition}
                wrapperClass='label'
                distanceFactor={ distFactor }
                occlude={ car }
                center
            >
                <div 
                    className='event'
                    onClick={ (e) => {
                        cameraControl.current.setLookAt( 2.25, -0.6, 3, 3, -0.6, 0, true)
                        // rotateScene.play()
                        tips.reverse()
                    }}
                ></div>
            </Html>
            
            <Html 
                key='rlights'
                ref={rlights}
                position={[ 2, 1.4, -2.6 ]}
                wrapperClass='label'
                distanceFactor={ distFactor }
                occlude={ car }
                center
            >   
                RLIGHTS
            </Html>
            <Html 
                key='lights'
                ref={lights}
                position={[ -2.55, 1.1, 0.4 ]}
                wrapperClass='label'
                distanceFactor={ distFactor }
                occlude={ car }
                center
            >
                <div 
                    className='event'
                    onClick={ (e) => {
                        cameraControl.current.setLookAt( -4.5, 0.5, 2, -2.55, 0.2, 0.4, true)
                        cameraControl.current.zoom( 0.1, true )
                        tips.reverse()
                    }}
                ></div>
            </Html>
            <Html 
                key='roof'
                ref={roof}
                position={[ 1, 2.3, 0 ]}
                wrapperClass='label'
                distanceFactor={ distFactor }
                occlude={ car }
                center
            >
                <div 
                    className='event'
                    onClick={ (e) => {
                        cameraControl.current.setLookAt( 8, 3, 0, 0.5, 1, -1.5, true)
                        cameraControl.current.dolly( 2, true )
                        tips.reverse()
                    }}
                ></div>
            </Html>
        </mesh>

        {/* <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} intensity={2} mipmapBlur />
            <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        </EffectComposer> */}

        <AccumulativeShadows position={[0, -1, 0]} frames={100} alphaTest={0.8} scale={10}>
            <RandomizedLight amount={8} radius={8} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>

        <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
            <Lightformers />
        </Environment>

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