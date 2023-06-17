import React, { useState, useEffect } from 'react';
import WindowTracker from './WindowTracker';

export default function AppWindowTracker() {
  /**61
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */
  const [show, setShow] = useState(true);

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="container">
      <button onClick={toggle}>Toggle WindowTracker🫢</button>
      {show && <WindowTracker />}
    </div>
  );
}
