import React, {useState} from 'react'

function AppConundrum() {
// const thingsArray = ["Thing 1", "Thing 2"]
// const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)


// 7
const [things, setThings] = useState(["Thing 1", "Thing 2"])



function addThing() {
// const newThingText = `Things ${thingsArray.length +1}`
// 7
// 🤔これ初期値のthings参照してるから❌？
const newThingText = `Thing ${things.length + 1}`

// thingsArray.push(newThingText)
// 7
// things.push(newThingText)


// 7
setThings(prevState => [...prevState, newThingText])
}


// 7
const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)



return (
<div>
    <button onClick={addThing}>Add Item</button>
    {thingsElements}
</div>
)
}


export default AppConundrum



// -----------------------------
// 9
// function addTwoNumbers(a, b) {
//     a = 42  // Don't do this!
//     return a + b
// }

// addTwoNumbers(1, 2)

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/



// function greeting(name) {
// const date = new Date()
// const hours = date.getHours()


// if(hours >= 4 && hours < 12) {
//     console.log(`Morning`)
// } else if (hours >= 12 && hours < 17) {
//     console.log(`Afternoon`)
// } else if (hours >= 17 && hours < 20) {
//     console.log(`Evening`)
// } else if (hours >= 20 || hours < 4) {
//     console.log(`Night`)
// }
// }

// greeting("Bob")


// 🌸
// const date = new Date();
// const hours = date.getHours();

// function greeting(name) {
//   if (hours >= 4 && hours < 12) {
//     console.log(`Good morning, ${name}`);
//   } else if (hours >= 12 && hours < 17) {
//     console.log(`Good afternoon, ${name}`);
//   } else if (hours >= 17 && hours < 20) {
//     console.log(`Good evening, ${name}`);
//   } else {
//     console.log(`Good night, ${name}`);
//   }
// }


// 👩‍🎓
function greeting(name) {
    const date = new Date()
    const hours = date.getHours()
    
    // 🤬🤬こう書くとsimple!!!!!!!!
    let timeOfDay

    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
        // 🤬🤬ここだけelseで楽に書く！！！！
    } else {
        timeOfDay = "night"
    }
    
    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))

