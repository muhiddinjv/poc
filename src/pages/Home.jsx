import React, { useState, useEffect, useRef } from 'react';
import Joyride from 'react-joyride';
import { Link } from 'react-router-dom';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const stories = [
  { id: 1, title: "Problema del Jinete", img: "https://raw.githubusercontent.com/muhiddinjv/poc/refs/heads/main/public/img/headless_horseman.jpg", words: [], games: [] },
  { id: 2, title: "El Barbero de Tyson", img: "https://picsum.photos/499", words: [], games: [] },
  // Add more stories here
];

const Home = () => {
  const steps1 = [
    {
      content: <h2 className="text-xl">Let's begin our journey!</h2>,
      placement: "center",
      target: "body",
    },
    {
      content: <h2>Here you can learn all the words for the story! Please, do not skip this step!</h2>,
      placement: "bottom",
      target: "#learn-1",
      title: "First step: Learn the words",
    },
    {
      content: <h2>Here you can answer questions about the story! Please, answer all the questions!</h2>,
      placement: "bottom",
      target: "#play-1",
      title: "Second step: Answer the questions",
    },
    {
      content: <h2>Read the full story to see how much you've learned & to enjoy your progress!</h2>,
      placement: "bottom",
      target: "#read-1",
      title: "Third step: Read the story",
    },
  ];

  const [state, setState] = useState({
    run: false,
    steps: steps1,
  });

  const [showAnimation, setShowAnimation] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const homeTourCompleted = localStorage.getItem('homeTourCompleted');
    
    if (!homeTourCompleted) {
      setShowAnimation(true);
    }
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    if (status === 'finished' || status === 'skipped') {
      localStorage.setItem('homeTourCompleted', 'true');
      setState((prevState) => ({ ...prevState, run: false }));
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const startTour = () => {
    localStorage.setItem('homeTourCompleted', 'true');
    setState((prevState) => ({ ...prevState, run: true }));
    setShowAnimation(false);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (state.run && audioRef.current) {
      audioRef.current.play();
    }
  }, [state.run]);

  return (
    <section className="min-h-screen bg-purple-500 flex flex-col items-center p-4">
      <audio ref={audioRef} src="/aud/The_Epic_Hero_Cinematic_Music.mp3" loop />
      <Joyride
        continuous
        run={state.run}
        steps={state.steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
        callback={handleJoyrideCallback}
        locale={{
          skip: <span className="bg-blue-500 text-white px-3 py-2 rounded">Skip</span>,
          back: <span className="bg-purple-500 text-white px-3 py-2 rounded">Back</span>,
        }}
      />
      <div className="bg-white rounded-md mb-4 flex items-center justify-center space-x-2 w-full max-w-md px-4">
        <div className='flex items-center w-full justify-center'>
          <img src="/img/logo-only.png" alt="Horseman" className="w-8 h-8 rounded-md object-cover" />
          <h1 className="bg-white rounded-md text-3xl font-bold text-purple-600 p-2 text-center">TaleTalk</h1>
        </div>
        <FontAwesomeIcon
          size="xl"
          onClick={startTour}
          icon={faQuestionCircle}
          className={`text-purple-600 cursor-pointer rounded-full ${showAnimation ? 'animate-pulse' : ''}`}
        />
      </div>
      <div className="w-full max-w-md">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-lg shadow-lg mb-4 p-2 flex items-center space-x-3">
            <img src={story.img} alt={story.title} className="w-24 h-24 rounded-md object-cover" />
            <div className="flex flex-col justify-around items-between min-h-24">
              <h2 className="text-xl font-semibold text-gray-700">{story.id} {story.title}</h2>
              <div className="flex flex-wrap space-x-2">
                <Link id={`learn-${story.id}`} to={`/words/${story.id}`} className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-600">Learn</Link>
                <Link id={`play-${story.id}`} to={`/games/${story.id}`} className="bg-green-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-green-600">Speak</Link>
                <Link id={`read-${story.id}`} to={`/story/${story.id}`} className="bg-pink-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-pink-600">Read</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
