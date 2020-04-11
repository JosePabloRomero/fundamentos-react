import React, {useState, useEffect} from 'react'

const useSizes = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    //Agregar listener
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {
        width,
        height
    }
}

const App = () => {
    const {height, width} = useSizes()
    return (
        <div>
            <h1>
                Width: {width}px Height: {height}px
            </h1>
        </div>
    )
}

export default App