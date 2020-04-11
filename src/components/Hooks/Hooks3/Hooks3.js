import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'


const FancyInput = forwardRef((props, ref) => {
const [text, setText] = useState('***')
const entrada = useRef()
    useImperativeHandle(ref, () => ({
        dispatchAlert: () => {
            alert('Hola')
        },
        setParragraph: (message) => {
            setText(message)
        },
        focusInput: () => {
            entrada.current.focus()
        }
    }))
    return (
        <div>
            <p>{text}</p>
            <input type='text' ref={entrada} />
        </div>
    )
})

const App = () => {
    const fancyInput = useRef()
    const handleClick = () => {
        //fancyInput.current.dispatchAlert()
        //fancyInput.current.setParragraph('Hola desde App')
        fancyInput.current.focusInput()
    }
    return (
        <div>
            <h1>Hola Mundo</h1>
            <FancyInput ref={fancyInput}/>
            <button onClick={handleClick}>Dispatch</button>
        </div>
    )
}

export default App