import React, { useState, useEffect } from "react";

const Card = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    let timer;
    if (flipped) {
      timer = setTimeout(() => {
        setFlipped(false);
      }, 2000); // Flip back after 3 seconds
    }
    return () => clearTimeout(timer); // Clear timeout if component unmounts or if the state changes
  }, [flipped]);

  return (
    <div
      className="w-80 h-48 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? 'rotateY-180' : ''
        }`}
      >
        <div
          className={`absolute w-full h-full flex items-center justify-center text-2xl bg-white border rounded shadow-md backface-hidden ${
            flipped ? '' : 'visible'
          }`}
        >
          {front}
        </div>
        <div
          className={`absolute w-full h-full flex items-center justify-center text-2xl bg-slate-500 text-white transform rotateY-180 border rounded shadow-md backface-hidden ${
            flipped ? 'visible' : ''
          }`}
        >
          {back}
        </div>
      </div>
    </div>
  );
};



export default Card;
