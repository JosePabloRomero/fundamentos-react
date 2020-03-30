import React, { Component } from 'react'

const Carrito = () => (
    <span role="img" aria-label="Carrito">
        🛒
    </span>
)

class CheckBox extends Component {
    state = {
        active: true
    }
    handleChange = (event) => {
        this.setState({
            active: event.target.checked
        })
    }
    render() {
        const {active} = this.state
        return (
            <div>
                {active && (
                    <h1>
                        Etiqueta CheckBox
                    </h1>
                )}
                <form>
                    <input
                        type="checkbox"
                        checked={active}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

class App extends Component {
    state = {
        techs: ['Vue']
    }

    handleChange = (event) => {
        const techs = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        )

        this.setState({ techs })
    }

    render() {
        return (
            <div>
                <h1>
                    Etiqueta Select <Carrito />
                </h1>
                <form>
                    <select
                        value={this.state.techs}
                        onChange={this.handleChange}
                        multiple
                    >
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Vanilla">Vanilla</option>
                    </select>
                </form>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}>
                            {tech}
                        </li>
                    ))}
                </ul>
                <CheckBox />
            </div>
        )
    }
}

export default App