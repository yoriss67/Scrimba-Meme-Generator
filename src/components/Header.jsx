import React from 'react'
import '../index.css'

function Header() {

return (
<nav className="header">
    
    <div className="nav--brand">
        <img src="/images/alien.png" className="brand--left" />
        <h1 className="brand--right">
          💖🧿 Meme Generator
        </h1>
    </div>

    <div className="nav--course">
        React Course - Project 3
    </div>

</nav>
)
}

export default Header