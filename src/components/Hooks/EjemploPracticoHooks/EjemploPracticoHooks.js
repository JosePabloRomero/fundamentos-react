import React, { useState, useRef, useEffect } from 'react'

const App = () => {
    const [name, setName] = useState('')
    const [products, setProducts] = useState([])
    const onChange = (e) => setName(e.target.value)
    const input = useRef()

    useEffect(() => {
        setTimeout(() => {
            if (name === input.current.value) {
                fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
                    .then(res => res.json())
                    .then(data => setProducts(data.products))
            }
        }, 600)
    }, [name])

    return (
        <div>
            <h1>Hola</h1>
            <input
                type='text'
                onChange={onChange}
                ref={input}
            >
            </input>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default App