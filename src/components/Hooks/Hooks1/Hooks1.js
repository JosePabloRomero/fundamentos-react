import React, { Component, useState, useEffect } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span>
      </h1>
    </header>
  )
}

const ClicksCounter = () => {
  const [clicks, setClicks] = useState(0)

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  return (
    <div>
      <button onClick={addClicks}>
        Clicks ({clicks})
      </button>
    </div>
  )
}

const UsersRequest = () => {
  const [users, setUsers] = useState([])
  const [isFetching, setFetching] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setUsers(users)
        setFetching(false)
      })
  }, [])

  return (
    <div>
      {isFetching && <h1>Cargando...</h1>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const MouseMove = () => {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMove = (e) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [mouseX, mouseY])
  return (
    <div>
      <h1>{mouseX}</h1>
      <h1>{mouseY}</h1>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Header />
      <ClicksCounter />
      <MouseMove />
      <UsersRequest/>
    </div>
  )
}

export default App