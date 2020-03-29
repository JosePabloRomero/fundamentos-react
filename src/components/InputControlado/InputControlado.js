import React, { Component } from 'react'

const Alien = () => (
    <span role='img' aria-label='Alien'>
        👽
    </span>
)

const Zombie = () => (
    <span role='img' aria-label='Zombie'>
        🧟‍♂️
    </span>
)

class InputControlado extends Component {
    state = {
        text: '',
        color: '#E8E8E8'
    }

    actualizar = (event) => {
        const text = event.target.value
        let color = 'green'
        if (text.trim() === '') {
            color = '#E8E8E8'
        }
        if (text.trim() !== '' && text.trim().length < 5) {
            color = 'red'
        }

        this.setState({ text, color })
        this.props.onChange(this.props.name, text)
    }
    render() {
        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }
        return (
            <input
                type="text"
                value={this.state.text}
                onChange={this.actualizar}
                style={styles}
                placeholder={this.props.placeholder}
            />
        )
    }
}

class Select extends Component {
    state = {
        tech: 'Vue'
    }
    handleChange = (event) => {
        this.setState({
            tech: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Etiqueta Select <Zombie/> {this.state.tech} </h1>
                <form>
                    <select value={this.state.tech} onChange={this.handleChange}>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Vanilla">Vanilla</option>
                    </select>
                </form>
            </div>
        )
    }
}

class App extends Component {
    state = {
        name: '',
        email: ''
    }
    actualizar = (name, text) => {
        this.setState({
            [name]: text
        })
    }
    render() {
        return (
            <div>
                <h1>
                    Inputs Controlados <Alien />
                </h1>
                <InputControlado
                    onChange={this.actualizar}
                    name='name'
                    placeholder='Nombre Completo'
                />
                <InputControlado
                    onChange={this.actualizar}
                    name='email'
                    placeholder='Tu Email'
                />
                <h2>
                    Nombre: {this.state.name}
                </h2>
                <h2>
                    Email: {this.state.email}
                </h2>
                <Select></Select>
            </div>
        )
    }
}

export default App