import React, { useState, lazy, Suspense } from 'react'
import {MoonLoader} from 'react-spinners'
//import{Image} from './Image/Image.js'

// Code Splitting - Importación dinamica 
const Image = lazy(() => import('./Image/Image'))

const App = () => {
    const [show, setShow] = useState(false)
    const toggle = () => setShow(!show)

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
    return (
        <div style={styles}>
            <button onClick={toggle} >
                {show ? 'Ocultar' : 'Mostrar'}
            </button>
            {show && (
                <Suspense fallback={<MoonLoader color='orangered'/>} >
                    <Image />
                </Suspense>
            )}
        </div>
    )
}

export default App