import React, { useState } from 'react'
import '../index.css'


function App() {

    const [isMouseOver, setIsMouseOver] = useState(false)

    function handleClick() {
        console.log("I was clicked!")
    }

    function handleMouseOver() {
        console.log("I was overed!")
        setIsMouseOver(true)
    }

    function handleMouseOut() {
        console.log("I was overed!")
        setIsMouseOver(false)
    }

  return (
    <div className="container">
        <img 
        src="/Nike-vans.png" 
        alt="" 
        onMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        />
        {isMouseOver && (
            <p>I was conditionally overed !</p>
        )}
    <button onClick={handleClick}>Click me</button>
</div>
)
}

export default App