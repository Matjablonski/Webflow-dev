import React from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './utils/Experience.jsx'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function App() {

    return (
        <div id="canvas-container">
            <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
                <Experience />
                {/* <EffectComposer disableNormalPass>
                    <Bloom mipmapBlur luminanceThreshold={10} />
                </EffectComposer> */}
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