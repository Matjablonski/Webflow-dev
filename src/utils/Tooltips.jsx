import React from "react"
import { useRef } from "react"
import { Html } from "@react-three/drei"

const Tooltips = React.forwardRef(() => {

    const distFactor = 7
    
    return (

        <>
            {/* <Html 
                key='wheels'
                // ref={wheels}
                position={[ 2.5, 0.8, 0 ]}
                wrapperClass='label'
                distanceFactor={ distFactor }
                occlude="blending"
                // occlude={ car }
                center
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

            <Html 
                key='lights'
                // ref={lights}
                position={[ -2.55, 1.1, 0.4 ]}
                wrapperClass='label'
                className='lights'
                distanceFactor={ distFactor }
                occlude="blending"
                // occlude={ car }
                center
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
            </Html>

            {/* <Html 
                // center
                key='roof'
                // ref={roof}
                position={[ 1, 2.3, 0 ]}
                wrapperClass='label'
                distanceFactor={ distFactor }
                // occlude={ car }
                center
            >
                <div 
                    className='event'
                    onClick={ (e) => {
                        cameraControl.current.saveState()
                        hideCameraBtn.play()
                        cameraControl.current.setLookAt( 8, 3, 0, 0.5, 1, -1.5, true)
                        cameraControl.current.dolly( 2, true )
                        tips.timeScale(2).reverse()
                    }}
                ></div>
            </Html> */}

            {/* <Html 
                key='gauges'
                // ref={gauges}
                position={[ 0.2, 1.5, 0.7 ]}
                wrapperClass='label-int'
                distanceFactor={ 0.9 }
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

export default Tooltips