import React, {useState} from "react"

// export default function ComplexState() {

//     const [thingsArray, setThingsArray] = useState(["ComplexState 1", "ComplexState 2"])
    
//     function addItem() {
//         // We'll work on this next

//         // 自作
//         setThingsArray(prevState => [...prevState, `ComplexState ${prevState.length + 1}`])
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }


export default function ComplexState() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    
    const [things, setThings] = useState([])

       
    // 🤬
    const thingsElements = things.map(thing => {

      return  <p key={thing}>{thing}</p>
    }) 
    
    function addItem() {
        // Build from scratch :)
        setThings(prevState => [...prevState, `やったー ${prevState.length + 1}`])
    }
 
    
    return (
        <div>
            <button onClick={addItem}>20 Complex State Challenge</button>
            <small>I guess this is better than AppConundrum.jsx</small>
            <p>{thingsElements}</p>
        </div>
    )
}

