import React from 'react'
import InputNoControlado from './components/InputNoControlado'
import InputNoControladoForm from './components/InputNoControladoForm'
import InputControlado from './components/InputControlado'
import InputSelectOption from './components/InputSelectOption'
const App = () => (
    <div>
        <InputNoControlado></InputNoControlado>        
        <InputNoControladoForm></InputNoControladoForm>
        <InputControlado></InputControlado>        
        <InputSelectOption></InputSelectOption>      
    </div>
)
export default App