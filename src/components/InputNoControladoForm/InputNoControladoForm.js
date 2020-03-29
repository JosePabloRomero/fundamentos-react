import React, {Component} from 'react'


const Ninja = () => (
    <span role='img' aria-label='ninja'>
        🐱‍👤
    </span>
)

class InputNoControladoForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const nombre = event.target[0].value
        const email = event.target[1].value
        this.props.onSend({nombre, email})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"                   
                    placeholder='Nombre'
                />
                <input
                    type="text"                  
                    placeholder='Email'
                />
                <button>
                    Enviar
                </button>
            </form>
        )
    }
}

class App extends Component{
    send = (data) => {
        console.log(data)
    }

    render(){
        return(
            <div>
                <h1>
                    Inputs No controlados Formularios <Ninja></Ninja>
                    <InputNoControladoForm onSend={this.send}></InputNoControladoForm>
                </h1>
            </div>
        )
    }
}

export default App