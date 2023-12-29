import * as THREE from 'three'
import { Vector3 } from 'three'
import React from 'react'
import { useRef, useEffect, useState } from "react"
import gsap from 'gsap'
import { useFrame, useThree } from '@react-three/fiber'
import { Html, CameraControls, AccumulativeShadows, Environment, Lightformer, SpotLight, RandomizedLight, Float, MeshReflectorMaterial, useHelper } from "@react-three/drei"
import { LayerMaterial, Color, Depth } from 'lamina'
import { useControls } from 'leva'

import Model from "./Model"

export default function Experience() {

    // const { position, target } = useControls({
    //     position: {
    //         value: { x: -2.35, y: 0.2, z: 0.45 },
    //         step: 0.05
    //     },
    //     target: {
    //         value: { x: -16, y: -1.7, z: 10 },
    //         step: 0.05
    //     }
    // })


    const [degraded, degrade] = useState(false)
    const car = useRef()
    const cameraControl = useRef()
    const btn = document.querySelector('.btn')
    const { gl } = useThree()
    const clock = new THREE.Clock();

    const wheels = useRef()
    const lights = useRef()
    const rlights = useRef()
    const roof = useRef()
    const interior = useRef()
    
    const light = useRef()
    const mainLight = useRef()
    const headLight = useRef()
    // useHelper(light, THREE.SpotLightHelper, 'cyan')

    const distFactor = 7

    let status = false
    let camera = useThree((state) => state.camera)
    let scene = useThree((state) => state.scene)

    const wheelsPosition = [ 2.5, 0.8, 0 ]
    let tips, rotateScene

    const curve = new THREE.CatmullRomCurve3( [
        new THREE.Vector3( - 5, 2, 0 ),
        new THREE.Vector3( - 3.5, 0, 8 ),
        new THREE.Vector3( - 2.25, 0.25, 6 ),
        new THREE.Vector3( - 1.5, 0.15, 9 ),
        new THREE.Vector3( 0, 0, 12 ),
    ] )

    const _tmp = new THREE.Vector3()
    const animationProgress = { value: 0 }
    const [animate, setAnimate] = useState(false);

    // useFrame(({ clock, camera }) => {

    //     if (animate) {

    //         const zoomFactor = Math.sin(clock.getElapsedTime()) * 1.5; // Adjust as needed
    //         // cameraControl.current.rotateTo(0, 0, 0); // Reset rotation (optional)
    //         cameraControl.current.setPosition(0, 0, 10 + zoomFactor / 2); // Update zoom

    //     }

    // })

    function complexTransition() {
        const rotScene = gsap.to(
            cameraControl.current, {
                azimuthAngle: cameraControl.current.azimuthAngle - 360 * THREE.MathUtils.DEG2RAD,
                duration: 160,
                ease: 'linear',
                paused: true,
                repeat: -1
            });
        const zoomScene = gsap.to(
            cameraControl.current, {
                distance: cameraControl.current.distance - 2,
                duration: 10,
                ease: 'power1.inOut',
                paused: true,
                yoyo: true,
                yoyoEase: true,
                repeat: -1
            });
    
        cameraControl.current.enabled = true;
        rotScene.play( 0 )
        zoomScene.play( 0 )
    }

    useEffect(() => {

        // cameraControl.current.rotateTo( Math.PI / 2, Math.PI / 4 )

        // GSAP timeline for rotating the camera
        // let sceneRotation = gsap.timeline({ repeat: -1, ease: 'power2.inOut' });
        // sceneRotation.to({}, {
        //     duration: 4,
        //     onUpdate: (progress) => {
        //         // Manually update the camera rotation during the GSAP animation
        //         cameraControl.current.rotateTo(0, progress * Math.PI * 2, 0);
        //     },
        // });

        let intro = gsap.timeline({
            // onStart: () => rotateScene.play(),
            onStart: () => {
                complexTransition()
                // cam.play()
            }
        })
        intro.to('.preloader', {
            xPercent: 100,
            duration: 2,
            ease: 'power4.inOut'
        })
        .from(camera.position, {
            x: 2.5,
            y: 2,
            z: 1.5,
            duration: 4,
            ease: 'power4.inOut',
            onUpdate: () => {
                camera.lookAt(0, 0, 0)
            }
        }, 0.3);
        // .fromTo(animationProgress, {
        //     value: 0,
        // }, {
        //     value: 1,
        //     duration: 4,
        //     // ease: 'power4.inOut',
        //     overwrite: true,
        //     onUpdateParams: [ animationProgress ],
        //     onUpdate( { value } ) {
        
        //         // if ( ! this.isActive() ) return;
    
        //         curve.getPoint ( value, _tmp );
        //         const cameraX = _tmp.x;
        //         const cameraY = _tmp.y;
        //         const cameraZ = _tmp.z;
        //         const lookAtX = 0;
        //         const lookAtY = 0;
        //         const lookAtZ = 0;
    
        //         cameraControl.current.setLookAt(
        //             cameraX,
        //             cameraY,
        //             cameraZ,
        //             lookAtX,
        //             lookAtY,
        //             lookAtZ,
        //             false, // IMPORTANT! disable cameraControls's transition and leave it to gsap.
        //         );
    
        //     },
        //     onComplete: () => console.log('complete!')
        // }, 0.2)
        

        // const spotLight = light.current;
        // const targetPosition = [target.x, target.y, target.z]; // Update with the desired target position
        // spotLight.target.position.set(...targetPosition);

        // Animate scene
        let cam = gsap.timeline({ 
            paused: true,
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
            z: 3,
        })
        .to(scene.rotation, {
            x: 0.1,
            overwrite: true
        }, '<')

        // Rotate scene
        rotateScene = gsap.timeline({
            repeat: -1,
            paused: true
        })
        rotateScene.to(scene.rotation, {
            y: Math.PI * 2,
            ease: 'linear',
            duration: 160
        })

        // Show tooltips
        const labels = document.querySelectorAll('.label > div, .label-alt')
        tips = gsap.timeline({ paused: true })
        tips.from(labels, {
            scale: 1.25,
            filter: 'blur(8px)',
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
                cameraControl.current.reset()
                // setAnimate((prevAnimate) => !prevAnimate)
                tips.timeScale(1).play()
                // rotateScene.pause()
                cam.pause()
                reverseCam()
                cameraControl.current.enabled = true
                cameraControl.current.connect( gl.domElement )
                status = true
            } else {
                document.body.style.cursor = 'default'
                tl.reverse()
                tips.timeScale(1).reverse()
                // rotateScene.play()
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
            backgroundColor: '#2E2E2E',
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
            hideCameraBtn.reverse()
            showText.timeScale(1.5).reverse()
            // rotateScene.pause()
            tips.play()
            cameraControl.current.reset(true)
            cameraControl.current.connect( gl.domElement )
        })

        const interiorBtn = document.querySelector('.btn-interior')
        interiorBtn.addEventListener('click', () => {
            hideCameraBtn.play()
            cameraControl.current.setLookAt( 0.3, 0.7, -0.4, 0, 0.5, 0, true)
            cameraControl.current.zoom( -0.8, true )
            tips.timeScale(2).reverse()
        })

        return () => {
            sceneRotation.kill();
        };

    }, [])

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
            boundaryFriction={0.9}
            enableZoom
        />

        <ambientLight ref={ light } intensity={0.8} />

        <directionalLight castShadow position={[ -10, 10, 0]} intensity={2} />

        <spotLight 
            ref={mainLight}
            position={[20, 15, 0]} 
            angle={0.3} 
            penumbra={1} 
            castShadow 
            intensity={2} 
            shadow-bias={-0.0001} 
        />

        {/* <pointLight
            position={[position.x, position.y, position.z]}
            intensity={2}
            color={'white'}
            power={200}
        /> */}

        {/* <spotLight
            position={[position.x, position.y, position.z]}
            ref={light}
            castShadow
            color={'yellow'}
            intensity={2}
            penumbra={1}
            angle={0.2}
            // distance={20}
            attenuation={1}
            anglePower={6}
        /> */}

        {/* <Headlight color="yellow" position={[position.x, position.y, position.z]} /> */}

        {/* <mesh
            castShadow
            receiveShadow
            position={[-2.35, 0.2, 0.45]}
            scale={0.05}
            ref={headLight}
        >
            <sphereGeometry args={[ 1, 10, 10 ]} />
            <meshStandardMaterial color={"white"} emissive={'cyan'} emissiveIntensity={10}/>
        </mesh> */}

        {/* <mesh
            // castShadow
            // receiveShadow
            position={[0, -1.01, 0]}
            // scale={0.05}
            rotation-x={-Math.PI * 0.5}
        >
            <planeGeometry args={[ 100, 100 ]} />
            <MeshReflectorMaterial
                blur={[ 300, 100 ]}
                mirror={ 0.5 }
                resolution={2048}
                mixBlur={1}
                // mixStrength={80}
                depthScale={1.3}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color={"#FFFFFF"} 
                metalness={0.5}
                roughness={1}
            />
        </mesh> */}

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
                        // gsap.to(scene.rotation, { y: 0, ease: 'power4.out', duration: 0.1 })
                        cameraControl.current.disconnect()
                        // cameraControl.current.maxAzimuthAngle = Math.PI / 0.42
                        // cameraControl.current.minAzimuthAngle = Math.PI / 0.52
                        hideCameraBtn.play()
                        showText.timeScale(1).play()
                        cameraControl.current.setLookAt( 2.5, -0.3, 1.5, 2.7, -0.5, 0, true)
                        cameraControl.current.zoom( -0.4, true )
                        // rotateScene.play()
                        tips.timeScale(2).reverse()
                    }}
                ></div>
            </Html>
            
            <Html 
                key='rlights'
                ref={rlights}
                position={[ 2, 1.1, -2.6 ]}
                wrapperClass='label'
                distanceFactor={ distFactor }
                occlude={ car }
                center
            >   
            </Html>
            <Html 
                key='lights'
                ref={lights}
                position={[ -2.55, 1.1, 0.4 ]}
                wrapperClass='label'
                className='lights'
                distanceFactor={ distFactor }
                occlude={ car }
                center
            >
                <div 
                    className='event'
                    onClick={ (e) => {
                        hideCameraBtn.play()
                        cameraControl.current.setLookAt( -3, 0.8, 2, -2.55, 0.2, 0.4, true)
                        cameraControl.current.zoom( -0.5, true )
                        tips.timeScale(2).reverse()
                    }}
                ></div>
            </Html>
            <Html 
                // center
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
                        hideCameraBtn.play()
                        cameraControl.current.setLookAt( 8, 3, 0, 0.5, 1, -1.5, true)
                        cameraControl.current.dolly( 2, true )
                        tips.timeScale(2).reverse()
                    }}
                ></div>
            </Html>
        </mesh>

        {/* <EffectComposer disableNormalPass>
            <Bloom mipmapBlur luminanceThreshold={10} />
        </EffectComposer> */}

        {/* <fog attach="fog" args={['#FFFFFF', 10, 30]} /> */}

        <AccumulativeShadows 
            position={[0, -1.01, 0]} 
            alphaTest={0.9}
            scale={10}
            frames={ 100 }
            // temporal
        >
            <RandomizedLight amount={8} radius={8} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>

        <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
            <Lightformers />
        </Environment>

    </>

}

function Headlight({ vec = new Vector3(), ...props }) {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)

    useFrame((state) => {

        // light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
        light.current.target.position.set( -16, -1.7, 10 )
        light.current.target.updateMatrixWorld()

    })

    return <SpotLight ref={light} penumbra={0.5} distance={6} angle={0.35} attenuation={1} anglePower={0} intensity={20} {...props} />
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


// ANIMATIONS

let hideCameraBtn = gsap.timeline({ paused: true })
hideCameraBtn.to('.btns-wrapper', {
    yPercent: 200,
    scale: 0.8,
    filter: 'blur(8px)',
    ease: 'power4.inOut',
    duration: 1
})
.from('.close-btn', {
    xPercent: 200,
    yPercent: -200,
    scale: 1.5,
    duration: 0.8,
    ease: 'power4.out'
}, 0.6)


// Show text
let title = document.querySelector('.title')
let desc = document.querySelector('.description')

let splitTitleParent = new SplitText(title, { type: 'words, chars', charsClass: 'split-parent' })
let splitTitle = new SplitText(title, { type: 'words, chars' })

let splitDesc = new SplitText(desc, { type: 'words, lines' })
let splitDescParent = new SplitText(desc, { type: 'words, lines', linesClass: 'split-parent' })

let showText = gsap.timeline({ paused: true })
showText.from(splitTitle.chars, {
    yPercent: -100,
    stagger: 0.02,
    ease: 'power4.out',
    duration: 0.3
}, 1)
.from(splitDesc.lines, {
    yPercent: -100,
    stagger: 0.06,
    ease: 'power4.out',
    duration: 0.4
}, 1.25);