import React, { Component } from 'react'

const Header = () => {
    const subtitleStyles = {
        fontWeight: 'bold'
    }

    const headerStyles = {
        margin: '0.6em',
        borderRadius: '0.3em',
        border: '1px solid #d2d2d2',
        padding: '2em 0.4em',
        fontFamily: 'monospace',
        fontSize: '17px',
        textAlign: 'center'
    }

    return (
        <header style={headerStyles}>
            <div>
                ( Hermanos )
        </div>
            <div style={subtitleStyles}>
                Parent Component
          <span role='img' aria-label='flame' >
                    🔥
          </span>
            </div>
        </header>
    )
}

const boxStyles = {
    padding: '0.5em',
    margin: ' 0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
}

const blueStyles = {
    ...boxStyles,
    border: '1px solid blue',
}

const redStyles = {
    ...boxStyles,
    border: '1px solid red',
}

class ComponentA extends Component {
    render() {
        const { num } = this.props
        return (
            <div style={blueStyles}>
                <button onClick={this.props.onAdd}>
                    ComponentA ({num})
                </button>
            </div>
        )
    }
}
class ComponentB extends Component {
    render() {
        const { num } = this.props
        return (
            <div style={redStyles}>
                <button onClick={this.props.onAdd}>
                    ComponentB ({num})
                </button>
            </div>
        )
    }
}

class App extends Component {
    state = {
        numA: 0,
        numB: 0
    }

    handleAddA = () => {
        this.setState(state => ({
            numA: state.numA + 1
        }))
    }
    handleAddB = () => {
        this.setState(state => ({
            numB: state.numB + 2
        }))
    }
    render() {
        const {numA, numB} = this.state
        return (
            <div>
                <Header></Header>
                <ComponentA num={numA} onAdd={this.handleAddB}></ComponentA>
                <ComponentB num={numB} onAdd={this.handleAddA}></ComponentB>
            </div>


        )
    }
}

export default App