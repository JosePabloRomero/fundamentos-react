import React, { Component } from 'react'
import styles from './Formulario.module.css'

const Unicorn = () => (
    <span role='img' arial-label='unicorn'>
        🦄
    </span>
)

class InputNoControlado extends Component {
    nombre = React.createRef()
    email = React.createRef()
    handleClick = () => {
        const nombre = this.nombre.current.value
        const email = this.email.current.value

        //Manejo de datos
        this.props.onSend({nombre,email})
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.nombre} placeholder='Nombre' />
                <input type="text" ref={this.email} placeholder='Email' />
                <button onClick={this.handleClick}>
                    Enviar
                </button>
            </div>
        )
    }
}

class App extends Component {
    send = (data) => {
        console.log(data)
    }
    render() {
        return (
            <div>
                <h1>
                    Inputs No Controlados Refs <Unicorn />
                    <InputNoControlado onSend={this.send}></InputNoControlado>
                </h1>
            </div>
        )
    }
}

export default App