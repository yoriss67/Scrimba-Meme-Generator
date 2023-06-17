import React, {useState} from "react"

export default function FlippingState() {
        const [isGoingOut, setIsGoingOut] = useState(true);
        
        function flipFeeling() {
            // setIsGoingOut(isGoingOut ? "Yes" : "No")

            // 🌸
            setIsGoingOut(!isGoingOut)

            // 👩‍🎓
            // setIsGoingOut(prevState => !prevState)

        }

    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    return (
        <div className="state">
            <h3 className="state--title">Do I feel like going out tonight?</h3>
            <div className="state--value">
                <h1 onClick={flipFeeling}>{isGoingOut ? "Yes": "No"}</h1>
            </div>
        </div>
    )
}
