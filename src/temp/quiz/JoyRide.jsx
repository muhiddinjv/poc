import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";

const JoyRide = ({ onTourCompletion }) => {
  const [runTour, setRunTour] = useState(false);
  const [tourSteps, setTourSteps] = useState([]);

  useEffect(() => {
    // Check if the tour was already completed
    const tourCompleted = localStorage.getItem("quizTourCompleted");

    if (!tourCompleted) {
      // Define the steps for the guided tour
      setTourSteps([
        {
          target: "#play-statement",
          content: "Press this button to hear the statement spoken.",
        },
        {
          target: "#question-section",
          content: "This is where you can see the question related to the statement.",
        },
        {
          target: "#answer-options",
          content: "Select the correct answer here.",
        },
        {
          target: "#progress-bar",
          content: "Keep an eye on your progress here.",
        },
      ]);

      // Start the tour if it hasn't been completed
      setRunTour(true);
    }
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    // Check if the tour was finished or skipped
    const finishedStatuses = ["finished", "skipped"];
    if (finishedStatuses.includes(status)) {
      setRunTour(false);
      onTourCompletion(); // Call the completion handler
    }
  };

  return (
    <Joyride
      steps={tourSteps}
      run={runTour}
      hideCloseButton
      scrollToFirstStep
      showSkipButton
      showProgress
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
      locale={{
        skip: <span className="bg-blue-500 text-white px-3 py-2 rounded">Skip</span>,
        back: <span className="bg-purple-500 text-white px-3 py-2 rounded">Back</span>,
      }}
    />
  );
};

export default JoyRide;
