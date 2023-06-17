import React, { useState, useEffect } from 'react';
import '../../index.css';

// 🤔まずuseStateでwindow.innerWidth
// その後、useEffectでwindow.innerWidthを更新する innerWidthが変わる度に更新する
// その後、returnでwindow.innerWidthを表示する
export default function WindowTracker() {
  // 🌸
  // Create a state for innerWidth: You need to create a state variable that will hold the current window width. You can use React's useState hook to do this. Initialize it with window.innerWidth which will give the current window width when the component mounts.

  // Update innerWidth when window resizes: You need to listen for window resize events and update your state variable when the window width changes. You can use the 🙋‍♀️useEffect hook to add an event listener to the window. Remember to clean up (remove the event listener) when the component unmounts.

  // Display the innerWidth: In your component's return statement, display the current innerWidth state variable instead of directly accessing window.innerWidth.

  // Only display WindowTracker if show is true: In AppWindowTracker.jsx, use a conditional (ternary) operator to display the WindowTracker component only when show is true.

  // Remember to import useState in AppWindowTracker.jsx if you haven't already, since it's used to maintain the show state.
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // setWindowWidth(window.innerWidth);
    // const  resizeWindow = () =>{
    // 👩‍🎓
    const watchWidth = () => {
      console.log('Setting up...');
      setWindowWidth(innerWidth);
    };
    addEventListener('resize', watchWidth);
    // }

    return () => {
      console.log('Cleaning up...');
      removeEventListener('resize', watchWidth);
    };

    // window.onresize = resizeWindow;
    // 🌸if it is [windowWidth], it runs every time windowWidth changes. This could lead to unnecessary executions of your effect if windowWidth changes very frequently. Since the resize event listener itself doesn't rely on the windowWidth state,
  }, []);

  //   setInterval(() => {
  //     console.log('you can see me every 3 seconds')
  // }, 3000);



  // https://reactgo.com/react-setinterval/#:~:text=The%20setInterval%20%28%29%20function%20is%20used%20to%20invoke,closing%20the%20window.%20Using%20setInterval%20in%20React%20hooks
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('This will run every second!');
      setSeconds(seconds + 1);
    }, 1000);

    // clearing interval
    return () => {
      console.log('Cleaning up...');
      clearInterval(timer);
    };
  });

  

  // 🌸Actually, the windowWidth variable holds the current state (the current window width), while setWindowWidth is the function that you call to update the state
  return (
    <div>
      <h1 className="window">Window width: {windowWidth}</h1>
      <h6>Number of seconds is {seconds}</h6>
    </div>
  );
}
