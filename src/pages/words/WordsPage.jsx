import React, { useState } from 'react';
import BackBtn from '../../components/BackBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import SRMain from './SRMain';
import { stepsWords } from "../../data";

export default function WordsPage(){
  const [state, setState] = useState({ run: false, steps: stepsWords });

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
