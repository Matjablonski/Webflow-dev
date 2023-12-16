import React from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './utils/Experience.jsx'

function App() {

    return (
        <div id="canvas-container">
            <Canvas shadows camera={{ position: [0, 12, 30], fov: 30 }}>
                <Experience />
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
// document.body.style.backgroundColor = 'yellow'