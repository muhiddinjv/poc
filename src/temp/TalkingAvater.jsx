import React, { useRef, useState } from "react";
import Speech from "react-text-to-speech";
import parseAPNG from "apng-js";

function getImgBuffer(url) {
    return new Promise(async resolve => {
      const blob = await fetch(url).then(res => res.blob());
      const reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  }

  async function createApngPlayer(url, ctx, options = {}) {
    const imgBuffer = await getImgBuffer(url);
    const apng = parseAPNG(imgBuffer);
    Object.keys(options).forEach(key => {
      apng[key] = options[key];
    });
    const player = await apng.getPlayer(ctx);
    return player;
  }

const TalkingAvatar = ({ avatarSrc }) => {
  const [text, setText] = useState("");
  const [avaTalking, setAvaTalking] = useState(false);
  const avatarCanvasRef = useRef(null);

  const animateAPNG = async () => {
    setAvaTalking(true);
    const canvas = avatarCanvasRef.current;
    const ctx = canvas.getContext("2d");
    const player1 = await createApngPlayer("/img/monalisa.png", ctx, { numPlays: 1 });
    player1.play()
    console.log({player1})
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <canvas
        ref={avatarCanvasRef}
        className="w-full h-full border rounded-lg p-4"
        width="600"
        height="600"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Spanish text"
        className="p-2 w-full max-w-md border border-gray-300 rounded"
      />
      <div onClick={animateAPNG} className="bg-blue-500 text-white py-2 px-4 rounded">
        <Speech
          text={text}
          voiceURI="Microsoft Paloma Online (Natural) - Spanish (United States)"
          lang="es-US"
          rate={0.9}
          stopBtn={false}
          onEnd={() => setAvaTalking(false)}
        />
      </div>
    </div>
  );
};

export default TalkingAvatar;
