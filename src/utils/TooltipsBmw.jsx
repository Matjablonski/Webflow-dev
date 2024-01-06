import * as THREE from 'three'
import React from "react"
import { useRef } from "react"
import { Html, Billboard } from "@react-three/drei"

const TooltipsBmw = React.forwardRef((props, cameraControl) => {

    const distFactor = 7
    
    return (

        <>
            {/* <Html 
                key='wheels'
                // ref={wheels}
                position={[ 2.2, 0.8, 0 ]}
                wrapperClass='label'
                distanceFactor={ distFactor }
                occlude="blending"
                material={
                    <meshPhysicalMaterial
                      side={THREE.DoubleSide} // Required
                      opacity={0.1} // Degree of influence of lighting on the HTML
                    />
                }
                transform
                // occlude={ car }
            >
                <div 
                    className='event'
                    onClick={ (e) => {
                        cameraControl.current.saveState()
                        cameraControl.current.disconnect()
                        hideCameraBtn.play()
                        showText.timeScale(1).play()
                        cameraControl.current.setLookAt( 2.5, -0.3, 1.5, 2.7, -0.5, 0, true)
                        cameraControl.current.zoom( -0.4, true )
                        tips.timeScale(2).reverse()
                    }}
                ></div>
            </Html> */}

            {/* <Html 
                key='lights'
                // ref={lights}
                position={[ -1.5, 1.1, 2.5 ]}
                wrapperClass='label'
                className='lights'
                distanceFactor={ distFactor }
                // occlude={ car }
            >
                <div 
                    className='event'
                    onClick={ (e) => {
                        cameraControl.current.saveState()
                        hideCameraBtn.play()
                        cameraControl.current.setLookAt( -3, 0.8, 2, -2.55, 0.2, 0.4, true)
                        cameraControl.current.zoom( -0.5, true )
                        tips.timeScale(2).reverse()
                    }}
                ></div>
            </Html> */}

            {/* <Billboard
                follow={true}
                lockX={false}
                lockY={false}
                lockZ={false} // Lock the rotation on the z axis (default=false)
                position={[ 2, 1.2, -3 ]}
            > */}
                <Html 
                center
                key='rearlight'
                wrapperClass='label'
                distanceFactor={ distFactor }
                position={[ 2, 1.2, -3 ]}
                as="div"
                // transform
                sprite
                zIndexRange={[100, 0]}
                occlude='blending'
                // material={
                //     <meshPhysicalMaterial
                //       side={THREE.DoubleSide} // Required
                //       opacity={0.7} // Degree of influence of lighting on the HTML
                //     />
                // }
                // onClick={ (e) => {
                //     cameraControl.current.saveState()
                //     // hideCameraBtn.play()
                //     cameraControl.current.setLookAt( 8, 3, 0, 0.5, 1, -1.5, true)
                //     cameraControl.current.dolly( 2, true )
                //     // tips.timeScale(2).reverse()
                //     console.log('tooltip clicked')
                // }}
            >
                <button 
                    className='event'
                    // onClick={ (e) => {
                    //     cameraControl.current.saveState()
                    //     // hideCameraBtn.play()
                    //     cameraControl.current.setLookAt( 8, 3, 0, 0.5, 1, -1.5, true)
                    //     cameraControl.current.dolly( 2, true )
                    //     // tips.timeScale(2).reverse()
                    //     console.log('tooltip clicked')
                    // }}
                ></button>
            </Html>
            {/* </Billboard> */}
            

            {/* <Html 
                key='gauges'
                // ref={gauges}
                position={[ 0.2, 1.5, 0.7 ]}
                wrapperClass='label-int'
                distanceFactor={ 0.9 }
                occlude="blending"
                prepend
                // occlude={ car }
                center
            >
                <div 
                    className='event'
                    onClick={ (e) => {
                        cameraControl.current.saveState()
                        hideCameraBtn.play()
                        tipsInterior.reverse()
                        cameraControl.current.smoothTime = 0.45
                        cameraControl.current.setLookAt( 0.7, 0.6, 0.15, 0.1, 0.5, 0.6, true)
                        cameraControl.current.zoom( 0.6, true )
                    }}
                ></div>
            </Html> */}
        </>

    )

})

export default TooltipsBmw