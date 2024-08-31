import React, { useState } from "react";
import Joyride, { STATUS } from "react-joyride";

function JoyrideApp() {
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2 className="text-xl">Let's begin our journey!</h2>,
        locale: { skip: <strong className="bg-blue-500 text-white p-2 rounded">SKIP</strong> },
        placement: "center",
        target: "body"
      },
      {
        content: <h2>Here is first step!</h2>,
        placement: "bottom",
        target: "#step-1",
        title: "First step"
      },
      {
        content: <h2>Here is second step!</h2>,
        placement: "bottom",
        target: "#step-2",
        title: "Second step"
      },
      {
        content: <h2>Here is third step!</h2>,
        placement: "bottom",
        target: "#step-3",
        title: "Third step"
      },
      {
        content: <h2>Here is fourth step!</h2>,
        placement: "bottom",
        target: "#step-4",
        title: "Fourth step"
      },
      {
        content: <h2>Here is fifth step!</h2>,
        placement: "bottom",
        target: "#step-5",
        title: "Fifth step"
      },
      {
        content: <h2>Here is six step!</h2>,
        placement: "bottom",
        target: "#step-6",
        title: "Six step"
      },
    ]
  });


  return (
    <div className="bg-gray-600 flex gap-2 p-2 text-white justify-center items-center flex-wrap">
      <Joyride
        continuous
        callback={() => {}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
      />
      {
        [1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div
              key={item}
              id={`step-${item}`}
              style={{
                border: "1px solid white",
                width: "100px",
                height: "100px",
                background: "#0c1d2b",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item}
            </div>
          )
        })
      }
    </div>
  );
}

export default JoyrideApp;