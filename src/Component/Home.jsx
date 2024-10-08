import {useState } from "react";
import Keyboard from "./Keyboard";
import WordGame from "./WordGame";

function Home() {
  const [typedLetter, setTypedLetter] = useState(null)
  const [isSpecialKey, setSpecialKey] = useState(null)

  return (
    <>
      <h1>Keyboard Warrior</h1>
      <div className="Game-Keyboard-Container">
      <WordGame typedLetter={typedLetter} setTypedLetter={setTypedLetter} isSpecialKey={isSpecialKey} setSpecialKey={setSpecialKey}/>
      <Keyboard typedLetter={typedLetter} isSpecialKey={isSpecialKey}/>
      </div>
    </>
  );
}

export default Home;
