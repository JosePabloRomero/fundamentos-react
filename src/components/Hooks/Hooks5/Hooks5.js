import React, { useState, useCallback } from 'react'

const getRandomColor = () => '#' + Math.random().toString(16).slice(2, 8)

const Button = React.memo(({ callBack, children }) => {
    const styles = {
        padding: '1em',
        fontSize: '20px',
        background: getRandomColor()
    }
    return (
        <button style={styles} onClick={callBack}>
            {children}
        </button>
    )
})

const App = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const incrementA = useCallback(() => {
        setA(a => a + 1)
    }, [])
    const incrementB = useCallback(() => {
        setB(b => b + a)
    }, [a])
    return (
        <div>
            <h1>Hi</h1>
            <Button callBack={incrementA}>
                Increment A
            </Button>
            <Button callBack={incrementB}>
                Increment B
            </Button>
            <h1>A: {a} B: {b}</h1>
        </div>
    )
}

export default App