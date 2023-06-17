import React, { useState, useEffect } from 'react';
import '../index.css';
// import memesData from '../memeData';

import { motion, useAnimation } from 'framer-motion';

function Meme() {
  const control = useAnimation();
  /**24
   * Challenge: Update our state to save the meme-related
   * data as an object called🤔 `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `memesData`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  //    OLD VER
  // const [memeImage, setMemeImage] = useState("");

  /**52
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/43a45p.png',
  });

  // 🤔
  // const [allMemes, setAllMemes] = React.useState(memesData);

  /** 60
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` 🙋‍♀️= allMemeImages  state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  const [allMemes, setAllMemes] = React.useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
    //↓ No dependency, so this effect will not run again.
  }, []);

  // console.log(allMemes)

  function getMemeImage() {
    // 60これが要らなくなるconst memeArray = memesData.data.memes;

    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevState) => {
      return {
        // 今までの
        ...prevState,
        // 上書き
        randomImage: url,
        topText: '',
        // 🙋‍♀️52 ここにbottomTextがなかったからボタンクリックしてもbottomTextが消えなかった
        bottomText: '',
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    // setMeme({ ...meme, [name]: value });
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  //   🤔formなの？？？？
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // setAllMemes(allMemes);
  //   // 🌸
  //   getMemeImage();
  // }

  return (
    // 前の。handleSubmitなくても動く<main className="" onSubmit={handleSubmit}>
    <main>
      <div className="form">
        <input
          placeholder="Top text"
          className="first--keyword"
          type="text"
          onChange={handleChange}
          value={meme.topText}
          name="topText"
        />
        <input
          placeholder="Bottom text"
          className="second--keyword"
          type="text"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
        <button type="submit" className="meme--button" onClick={getMemeImage}>
          Get a new meme image 🫢
        </button>
      </div>

      <div className="meme">
        {/* <img src={meme.randomImage} alt="" className="meme--image" /> */}
        <motion.img
        src={meme.randomImage} alt="meme--image" className="meme--image"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.5 },
         }}
        />
        <h2 className="meme--text a top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );

  // 前のお手本
  // const cards = cardData.map((card) => {

  //     return (
  //       <Card
  //       key={card.id}
  //       {...card}
  //       />

  //       )
  //   })

  //   return (
  //     <div className="card-container">
  //       {cards}
  //     </div>
  //   )
}

export default Meme;
