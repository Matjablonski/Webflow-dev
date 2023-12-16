import * as THREE from 'three'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import Model from './utils/Model.jsx'

function App() {
    return (
        <div id="canvas-container">
            <Canvas>
                <CameraControls />
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <Model />
                </mesh>
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
document.body.style.backgroundColor = 'yellow'
console.log('it works!')