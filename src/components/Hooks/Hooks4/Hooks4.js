import React, { useState } from 'react'

//React.memo() HOC

const Counter = React.memo(({ count }) => {
    console.log('Render <Counter />')

    return (
        <h1>
            {count}
        </h1>
    )
})

const Title = React.memo(({ text }) => {
    console.log('Render <Title />')

    return (
        <h1>
            {text}
        </h1>
    )
})

const TitleNested = React.memo(({ info }) => {
    console.log('Render <Title />')

    return (
        <h1>
            {info.text}
        </h1>
    )
},
    (prevProps, nextProps) => {
        // si retorna true no se renderiza
        //si retorna false si se renderiza
        return prevProps === nextProps
     }
)

const App = () => {
    const [title, setTitle] = useState('')
    const [count, setCount] = useState(0)

    const handleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleAdd = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <input type='text' onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
            <Counter count={count} />
            <Title text={title} />
            <TitleNested info={{ text: title }} />
        </div>
    )
}

export default App