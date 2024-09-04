import React, { useState } from 'react';
import BackBtn from '../../components/BackBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import SRMain from './SRMain';

function Words() {
  const steps1 = [
    {
      content: <h2 className="text-xl">Let's learn new words!</h2>,
      placement: "center",
      target: "body",
    },
    {
      content: <h2>Click Again if you dont know the word in the card above. It will come up again later.</h2>,
      placement: "bottom",
      target: "#again",
      title: "Again = I dont know it at all",
    },
    {
      content: <h2>Click Hard if it took you more than 1 minute to remember the word</h2>,
      placement: "bottom",
      target: "#hard",
      title: "Hard = I know it only 10% of the time",
    },
    {
      content: <h2>Click Good if it took you less than 1 minute to remember the word</h2>,
      placement: "bottom",
      target: "#good",
      title: "Good = I know it 50% of the time",
    },{
      content: <h2>Click Easy if it took you less than 10 seconds to remember the word</h2>,
      placement: "bottom",
      target: "#easy",
      title: "Easy = I know it 100% of the time",
    },
  ];
  const [state, setState] = useState({ run: false, steps: steps1 });

  const startTour = () => {
    console.log('startTour function is called');
    // setState((prevState) => ({ ...prevState, run: true }));
  };

  return (
    <section className="h-screen bg-purple-500 flex flex-col justify-center items-center">
      <div className="px-4 py-2 bg-white border-b border-slate-200 text-blue-500 flex max-w-lg w-full">
        <BackBtn textColor="text-blue-500" />
        <div className="w-full text-center flex items-center justify-between px-2">
          <div className="text-2xl font-bold text-center w-full">Word Review</div>
          <FontAwesomeIcon
            size="xl"
            onClick={startTour}
            icon={faQuestionCircle}
            className="text-blue-500 cursor-pointer rounded-full"
          />
        </div>
      </div>
      <div className="h-full bg-white text-center shadow-lg max-w-lg w-full">
        <SRMain />
      </div>
    </section>
  );
}

export default Words;
