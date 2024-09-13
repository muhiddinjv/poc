import { useState, useRef, useEffect } from "react";
import parseAPNG from "talkr-apng";

// Helper functions
const getImgBuffer = async (url) => {
  const blob = await fetch(url).then((res) => res.blob());
  const reader = new FileReader();
  reader.readAsArrayBuffer(blob);
  return new Promise((resolve) => {
    reader.onload = () => resolve(reader.result);
  });
};

const createApngPlayer = async (url, ctx, options = {}) => {
  const imgBuffer = await getImgBuffer(url);
  const apng = parseAPNG(imgBuffer);
  Object.keys(options).forEach((key) => {
    apng[key] = options[key];
  });
  const player = await apng?.getPlayer(ctx);
  return player;
};

// Custom Hook: useTalkingAvatar
export const useTalkingAvatar = (avatarSrc) => {
  const [text, setText] = useState("");
  const [avaTalking, setAvaTalking] = useState(false);
  const avatarCanvasRef = useRef(null);

  // Load the avatar's first frame to display initially
  const loadFirstFrame = async () => {
    const canvas = avatarCanvasRef.current;
    const ctx = canvas.getContext("2d");

    const player = await createApngPlayer(avatarSrc, ctx, { numPlays: 1 });
    // Draw the first frame of the APNG to display as a static image initially
    player.renderNextFrame();
  };

  // Function to animate APNG when speech starts
  const animateAndSpeak = async () => {
    setAvaTalking(true);
    const canvas = avatarCanvasRef.current;
    const ctx = canvas.getContext("2d");

    const player = await createApngPlayer(avatarSrc, ctx, { numPlays: 1 });
    player.play();

    // Stop the animation after the avatar finishes talking
    player.on('end', () => setAvaTalking(false));
  };

  useEffect(() => {
    loadFirstFrame(); // Load initial frame
  }, []);

  return {
    text,
    setText,
    avaTalking,
    avatarCanvasRef,
    animateAndSpeak
  };
};
