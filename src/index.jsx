import React from 'react'
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import { Canvas, extend } from '@react-three/fiber'
import Experience from './utils/Experience.jsx'
import { Effects, Bvh } from "@react-three/drei"
import { EffectComposer, SSAO, N8AO, DepthOfField, Bloom, ToneMapping, Vignette } from '@react-three/postprocessing'
import { UnrealBloomPass } from 'three-stdlib'

extend({ UnrealBloomPass })

function App() {

    return (
        <div id="canvas-container">
            <Canvas 
                shadows 
                camera={{ position: [0, 0, 12], fov: 30 }}
                // onCreated={({ gl }) => {
                //     gl.setClearColor('white')
                //     // gl.toneMapping = THREE.ACESFilmicToneMapping
                //     gl.outputColorSpace = THREE.SRGBColorSpace
                // }}
            >
                <Experience />
                {/* <EffectComposer multisampling={10} disableNormalPass>
                    <Bloom mipmapBlur luminanceThreshold={5} />
                    <Vignette offset={0.3} darkness={0.5} />
                    <ToneMapping />
                </EffectComposer> */}
                <Effects multisamping={8} renderIndex={1} disableGamma={true} disableRenderPass={false} disableRender={false}>
                    <unrealBloomPass threshold={3} strength={0.35} radius={0} />
                </Effects>

            </Canvas>
        </div>
    )
}
  
// createRoot(document.getElementById('root')).render(<App />)
const render = createRoot(document.getElementById('root'))

render.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)