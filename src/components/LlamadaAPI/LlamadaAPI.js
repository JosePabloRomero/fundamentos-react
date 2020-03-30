import React, { Component } from 'react'

class App extends Component {
    state = {
        users: [],
        cargando: true
    }

    componentDidMount() {
        /* setTimeout(() => {
            this.setState({
                text: 'Hola React'
            })
        }, 1000) */
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then(users => this.setState({users, cargando:false}))
            .catch(error => {
                //Manejo del error
            })
    }

    render() {
        if(this.state.cargando) {
            return <h1>Cargando...</h1>
        }
        return (
            <div>
                <h1>Peticion HTTP</h1>
                <h2>{this.state.text}</h2>
                <ul>
                    {this.state.users.map(users => (
                        <li key={users.id}>
                            {users.name}
                            <a href = {`https://${users.website}`}>
                                website
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App