import React from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, extend } from '@react-three/fiber'
import Experience from './utils/Experience.jsx'
import { Effects } from "@react-three/drei"
import { EffectComposer, SSAO, N8AO, DepthOfField, Bloom } from '@react-three/postprocessing'
import { UnrealBloomPass } from 'three-stdlib'

extend({ UnrealBloomPass })

function App() {

    return (
        <div id="canvas-container">
            <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
                <Experience />
                {/* <EffectComposer disableNormalPass>
                    <Bloom mipmapBlur luminanceThreshold={1} />
                </EffectComposer> */}
                <Effects multisamping={8} renderIndex={1} disableGamma={true} disableRenderPass={false} disableRender={false}>
                    <unrealBloomPass threshold={1} strength={1} radius={0} />
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