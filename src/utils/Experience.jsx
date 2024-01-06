import * as THREE from 'three'
import React from 'react'
import { useRef, useEffect, useState } from "react"
import gsap from 'gsap'
import { useFrame, useThree } from '@react-three/fiber'
import { CameraControls, Bvh, PerformanceMonitor, AccumulativeShadows, Environment, SpotLight, RandomizedLight, useHelper } from "@react-three/drei"
import { useControls } from 'leva'
// import { useBVH } from './useBVH'


import Model from "./Model"
import Bmw from './Bmw'
import BmwM4 from './BmwM4'
import Lightformers from './Lightformers'
import Tooltips from './Tooltips'
import TooltipsBmw from './TooltipsBmw'

export default function Experience() {

    // const { position, target, intensity, power } = useControls({
    //     position: {
    //         value: { x: 0, y: 10, z: 0 },
    //         step: 0.05
    //     },
    //     // intensity: {
    //     //     value: 2,
    //     //     step: 0.05
    //     // },
    //     // power: {
    //     //     value: 2,
    //     //     step: 0.05
    //     // },
    // })


    const [degraded, degrade] = useState(false)
    const car = useRef()
    useBVH(car)
    const cameraControl = useRef()
    const btn = document.querySelector('.btn')
    const { gl } = useThree()
    const clock = new THREE.Clock();

    const wheels = useRef()
    const lights = useRef()
    const roof = useRef()
    const gauges = useRef()
    const interior = useRef()

    const point = useRef()
    
    const light = useRef()
    const mainLight = useRef()
    const interiorLight = useRef()
    const directLight = useRef()
    const extraLights = useRef()
    const headLight = useRef()

    // useHelper(directLight, THREE.DirectionalLightHelper, 'cyan')

    const distFactor = 7

    let status = false
    let camera = useThree((state) => state.camera)
    let scene = useThree((state) => state.scene)

    let tips, tipsInterior, rotateScene

    // Exclusive control for user dragging
    let userDragging = false;
    let disableAutoRotate = false;
    
    useEffect(() => {

        const onRest = () => {

            cameraControl.current.removeEventListener( 'rest', onRest );
            userDragging = false;
            disableAutoRotate = false;
        
        }

        // TOGGLE CAMERA CONTROLS
        // cameraControl.current.disconnect()
        let active = false
        btn.addEventListener('click', () => {

            if ( status === !true ) {

                // Change cursor
                document.body.style.cursor = 'grab'

                // Save position and return
                active = true
                cameraIntro()
                cameraControl.current.reset( true )
                cameraControl.current.maxSpeed = 10
                cameraControl.current.smoothTime = 0.25
                cameraControl.current.setLookAt( 0, 0, 12, 0, 0, 0, true)
                cameraControl.current.moveTo( 0, 0, 0, true)

                buttonTl.play()
                tips.timeScale(1).play()
                cameraControl.current.enabled = true
                cameraControl.current.connect( gl.domElement )

                // Make interior btn active
                document.querySelector('.btn-interior').classList.remove('inactive')
                status = true

            } else {

                document.body.style.cursor = 'default'
                active = false
                cameraIntro()
                cameraControl.current.addEventListener('rest', onRest)
                buttonTl.reverse()
                tips.timeScale(1).reverse()
                cameraControl.current.disconnect()

                // Make interior btn inactive
                document.querySelector('.btn-interior').classList.add('inactive')
                status = false

            }

        }, [ camera ])


        let intro = gsap.timeline()
        intro.to('.preloader', {
            xPercent: 100,
            duration: 2,
            ease: 'power4.inOut'
        })

        function cameraIntro() {

            cameraControl.current.smoothTime = 8
            cameraControl.current.maxSpeed = 2
            // cameraControl.current.restThreshold = 0.3

            function firstCam() {

                if ( active === true )
                return;

                cameraControl.current.reset( false )
                cameraControl.current.restThreshold = 0.3
                cameraControl.current.setLookAt( -2, -0.5, 4, -1, 0, 0, false )
                cameraControl.current.azimuthAngle = -90 * THREE.MathUtils.DEG2RAD
                cameraControl.current.polarAngle = 50 * THREE.MathUtils.DEG2RAD

                setTimeout(() => {
                    cameraControl.current.moveTo( 0.4, -0.8, 2.2, true)
                    cameraControl.current.rotateTo( -70 * THREE.MathUtils.DEG2RAD, 110 * THREE.MathUtils.DEG2RAD, true )
                }, 10)

                cameraControl.current.addEventListener( 'rest', () => {
                    console.log('stopped')
                    cameraControl.current.removeAllEventListeners( 'rest' )
                    secondCam()
                })

            }

            function secondCam() {

                if ( active === true )
                return;

                cameraControl.current.reset( false )
                cameraControl.current.restThreshold = 0.4
                cameraControl.current.moveTo( 3.5, 0, 0, false)
                cameraControl.current.setLookAt( 3.5, -3, 3, 0, 0, 0, false )
                cameraControl.current.azimuthAngle = 20 * THREE.MathUtils.DEG2RAD
                cameraControl.current.polarAngle = 90 * THREE.MathUtils.DEG2RAD

                setTimeout(() => {
                    cameraControl.current.moveTo( -1, -0.2, 3, true)
                    cameraControl.current.rotateTo( 25 * THREE.MathUtils.DEG2RAD, 80 * THREE.MathUtils.DEG2RAD, true )
                    cameraControl.current.zoom( 0.5, true )
                }, 10)

                cameraControl.current.addEventListener( 'rest', () => {
                    cameraControl.current.removeAllEventListeners( 'rest' )
                    thirdCam()
                })

            }

            function thirdCam() {

                if ( active === true )
                return;

                cameraControl.current.reset( false )
                cameraControl.current.restThreshold = 0.7
                cameraControl.current.setLookAt( 0, 5, 0, 0, 0, 0, false )
                cameraControl.current.moveTo( 2.5, 0, -2, false)
                cameraControl.current.azimuthAngle = 90 * THREE.MathUtils.DEG2RAD
                cameraControl.current.polarAngle = 35 * THREE.MathUtils.DEG2RAD

                setTimeout(() => {
                    cameraControl.current.moveTo( -2.5, -1, 2, true)
                    cameraControl.current.rotatePolarTo( 0 * THREE.MathUtils.DEG2RAD, true )
                }, 10)

                cameraControl.current.addEventListener( 'rest', () => {
                    cameraControl.current.removeAllEventListeners( 'rest' )
                    fourthCam()
                })

            }

            function fourthCam() {

                if ( active === true )
                return;

                cameraControl.current.reset( false )
                cameraControl.current.restThreshold = 0.4
                cameraControl.current.setLookAt( 0, -2, 10, 0, -0.3, 0, false )
                cameraControl.current.moveTo( -1, -0.3, 0, false)
                cameraControl.current.azimuthAngle = 100 * THREE.MathUtils.DEG2RAD
                cameraControl.current.polarAngle = 90 * THREE.MathUtils.DEG2RAD

                setTimeout(() => {
                    cameraControl.current.moveTo( -4, -0.2, 0.5, true)
                    cameraControl.current.rotateTo( 108 * THREE.MathUtils.DEG2RAD, 88 * THREE.MathUtils.DEG2RAD, true )
                }, 10)

                cameraControl.current.addEventListener( 'rest', () => {
                    cameraControl.current.removeAllEventListeners( 'rest' )
                    firstCam()
                })

            }

            firstCam()
            // secondCam()
            // thirdCam()
            // fourthCam()

        }

        cameraIntro()


        function fly(startingPos) {

            // Path animation vars
            let curve = new THREE.CatmullRomCurve3( [
                new THREE.Vector3( startingPos.x, startingPos.y, startingPos.z ),
                new THREE.Vector3( 3.2, 3, 10 ),
                new THREE.Vector3( 2.6, 2, 6 ),
                new THREE.Vector3( 2, 1, 3.5 ),
                new THREE.Vector3( 0.4, 0.6, -0.4 ),
            ] )
            let _tmp = new THREE.Vector3()
            const animationProgress = { value: 0 }
    

            let interior = gsap.timeline({ 
                defaults: {
                    immediateRender: false
                }
            })
            interior.fromTo(animationProgress, {
                value: 0,
            }, {
                value: 1,
                duration: 3,
                ease: 'expo.inOut',
                overwrite: true,
                onUpdateParams: [ animationProgress ],
                onUpdate( { value } ) {
            
                    if ( ! this.isActive() ) return;
        
                    curve.getPoint ( value, _tmp );
                    let cameraX = _tmp.x;
                    let cameraY = _tmp.y;
                    let cameraZ = _tmp.z;
                    const lookAtX = 0;
                    const lookAtY = 0.4;
                    const lookAtZ = 0;
        
                    cameraControl.current.setPosition(
                        cameraX,
                        cameraY,
                        cameraZ,
                        true
                    );

                    gsap.delayedCall( 0.5, () => cameraControl.current.zoom( -0.0021, true ))
                    gsap.delayedCall( 2.3, () => cameraControl.current.setTarget( lookAtX, lookAtY, lookAtZ, true ))
        
                },
                onStart() {

                    cameraControl.enabled = false;
        
                },
                onComplete() {
        
                    cameraControl.enabled = true;
        
                },
            })

            return fly

        }
        

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
        const labels = document.querySelectorAll('.label > div')
        const labelsInt = document.querySelector('.label-int > div')

        tips = gsap.timeline({ paused: true })
        tips.from(labels, {
            scale: 1.25,
            filter: 'blur(8px)',
            autoAlpha: 0,
            stagger: 0.08,
            ease: 'expo.out',
            duration: 0.8
        })

        tipsInterior = gsap.timeline({ paused: true })
        tipsInterior.from(labelsInt, {
            scale: 1.25,
            filter: 'blur(8px)',
            autoAlpha: 0,
            stagger: 0.08,
            ease: 'expo.out',
            duration: 0.8
        })

        // Animate light
        let showLight = gsap.timeline({ 
            paused: true
        })
        showLight.to([ light.current, mainLight.current ], {
            intensity: 0,
            duration: 4,
            ease: 'power2.out'
        })
        .to(extraLights.current.position, {
            x: -30,
            y: -10,
            duration: 4,
            ease: 'power2.inOut'
        }, '<')
        .to(interiorLight.current, {
            intensity: 2.5,
            power: 40,
            delay: 3.5,
            duration: 4.5,
            ease: 'expo.out',
            onStart: () => tipsInterior.play()            
        }, '<')


        let bg = document.querySelector('.switch')
        let knob = document.querySelector('.knob')  

        // Animate button
        let buttonTl = gsap.timeline({ 
            paused: true,
            defaults: {
                ease: 'back.inOut',
                duration: 0.6
            }
        })
        buttonTl.to(bg, {
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
            showLight.tweenTo(0, { ease: 'power1.out', duration: 1 })
            // rotateScene.pause()
            tips.play()
            cameraControl.current.setTarget(0, 0, 0, true)
            cameraControl.current.reset(true)
            cameraControl.current.connect( gl.domElement )

        })

        const interiorBtn = document.querySelector('.btn-interior')
        interiorBtn.addEventListener('click', () => {

            cameraControl.current.saveState()
            hideCameraBtn.play()
            let startingPos = cameraControl.current.getPosition()
            fly(startingPos)
            showLight.play()
            tips.timeScale(2).reverse()

        })

    }, [])

    return <>

        <CameraControls 
            ref={cameraControl} 
            enabled={true} 
            smoothTime={0.25} 
            restThreshold={0.0050}
            truckSpeed={0}
            boundaryEnclosesCamera={true} 
            maxDistance={14} 
            minDistance={6} 
            minPolarAngle={0.4} 
            maxPolarAngle={Math.PI * 0.5} 
            boundaryFriction={0.9}
            enableZoom
        />

        <ambientLight ref={ light } intensity={2} />

        <directionalLight ref={ directLight } castShadow position={[ 2, 4, 3]} intensity={1} shadow-bias={-0.0002}/>

        <spotLight 
            ref={mainLight}
            position={[20, 15, 0]} 
            angle={0.3} 
            penumbra={1} 
            castShadow 
            intensity={2} 
            shadow-bias={-0.0001} 
        />

        <pointLight
            ref={interiorLight}
            position={[ 0.25, 0.7, -0.6 ]}
            intensity={0}
            power={0}
            color={'#FFFAE8'}
            castShadow
        />

        <mesh 
            ref={ car } 
            position={[0, -1, 0]} 
        >
            <Bmw 
                scale={1.4} 
                position={[ 0, -0.02, 0 ]}
                rotation={[0, -Math.PI / 3.5, 0]} 
            />

            {/* <BmwM4
                // scale={0.006} 
                // position={[1.5, 1.42, 1.5]} 
                rotation={[0, -Math.PI / 3, 0]} 
            /> */}

            {/* <Model scale={1.6} rotation={[0, Math.PI / 5, 0]} /> */}
            
            {/* <Tooltips /> */}
            
        </mesh>

        <TooltipsBmw ref={cameraControl} />

        <AccumulativeShadows 
            position={[0, -1.01, 0]} 
            alphaTest={0.9}
            scale={10}
            frames={ 100 }
            // temporal
        >
            <RandomizedLight amount={8} radius={8} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>

        <PerformanceMonitor onDecline={() => degrade(true)} />

        <Environment 
            // preset='forest'
            frames={degraded ? 1 : Infinity} 
            resolution={512} 
            background blur={1}
        >
            <Lightformers ref={extraLights} />
        </Environment>

    </>

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