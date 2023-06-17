import React from "react"

/**24
* Challenge:
* - Create a new component named Count
* - It should receive a prop called `number`, whose value
* is the current value of our count
* - Have the component render the whole div.counter--count
* and display the incoming prop `number`
* - Replace the div.counter--count below with an instance of
* the new Count component
*/



// export default function Counter({number}) {
// return (
// <div className="counter--count">
//     <h1>{number}</h1>
// </div>

// )
// }

export default function Counter(prop) {
    console.log("Counter component rendered")

    return (
    <div className="counter--count">
        <h1>{prop.number}</h1>
    </div>
    
    )
    }



    // ------------------------

//     // App.js
//     import Header from "./Header"
//     import Body from "./Body"
    
//     export default function App() {
//         const [user, setUser] = React.useState("Bob")
        
//         return (
//             <main>
//                 <Header user={user} />
//                 <Body user={user} />
//             </main>
//         )
//     }
    
// // Header.js
// import React from "react"

// export default function Header(props) {
//     return (
//         <header>
//             <p>Current user: {props.user}</p>
//         </header>
//     )
// }


// // Body.js
// import React from "react"

// export default function Body(props) {
//     return (
//         <section>
//             <h1>Welcome back, {props.user}!</h1>
//         </section>
//     )
// }

