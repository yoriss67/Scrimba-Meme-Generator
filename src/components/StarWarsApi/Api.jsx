// import React, { useState, useEffect } from 'react';

// export default function Api() {
//   const [starWarsData, setStarWarsData] = React.useState({});
//   const [count, setCount] = React.useState(0)

//   console.log('Component rendered');

//   // 🌸10人見せたい場合
//   // let count = 1;
//   // function apiCounter() {
//   //     for (let i = 0; i < 10; i++) {
//   //     count++;
//   //     }
//   //     return count;
//   // }

//   // apiCounter()

//   // useEffect(() => {
//   //     fetch(`https://swapi.dev/api/people/${count}`)
//   //         .then(res => res.json())
//   //         .then(data => setStarWarsData(data));

//   //         console.log("Effect ran")
//   //         // 🙋‍♀️thenが2回あるからconsoleも2回
//   // }, []); // Empty dependency array to ensure the fetch only runs on component mount
// // 🌸

//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch(`https://swapi.dev/api/people/${count}`)
//             .then(res => res.json())
//             .then(data => setStarWarsData(prevData => prevData + data))
//     }, [count])

//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, ["name"], "🫐🥑🍅🍑")}</pre>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Add
//       </button>
//       <h6 className="star-wars">{starWarsData.name} </h6>

//       {/* <pre>JSON.stringify(starWarsData, ['name', 'gender', 'height'], 2)</pre> */}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import './Api.css';

export default function Api() {
  const [starWarsData, setStarWarsData] = React.useState([]);
  const [count, setCount] = React.useState(0);

  console.log('Component rendered');


  React.useEffect(
    function () {
      console.log('Effect ran');
      fetch(`https://swapi.dev/api/people/${count}`)
      // 😵fetch(`https://dog.ceo/api/breeds/image/random/${count}`)

      // 🌸res in .then(res => res.json()) is the raw response from the fetch operation.  but it's not immediately accessible or in a usable format.
        .then(res => res.json())

        // map()するから[ ]で囲む
        .then(data => setStarWarsData([data]))

        // 🌸dataをstockして表示したい
        // .then((data) => setStarWarsData((prevData) => [...prevData, data]));
    },[count],
  );

  return (
    <div>
      {starWarsData.map((data, index) => (
        <div className='star-wars-parent' key={index}>
          <div>{JSON.stringify(data, ['name', 'height'], '👽')}</div>
          {/* 😵<img src={data}  alt="dog" /> */}
          <h6 className="star-wars">{data.birth_year}</h6>
        </div>
      ))}
      <h2>The count is {count}</h2>
      <button className='add' onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}
