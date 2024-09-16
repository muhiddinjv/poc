import React from "react";
import Speech from "react-text-to-speech";

const Statement = ({ statement }) => (
  <div className="flex flex-col items-center py-2 bg-gray-50 border-b">
    {statement.image && (
      <img src={statement.image} alt="statement visual" className="max-w-72 h-72 rounded" />
    )}
    <div className="flex items-center text-blue-700">
      <div id="play-statement" className="cursor-pointer p-1 rounded-full">
        <Speech
          text={statement.statement}
          lang="es-US"
          rate={0.8}
          voiceURI="Microsoft Paloma Online (Natural) - Spanish (United States)"
          stopBtn={false}
        />
      </div>
      <h2 className="text-lg font-semibold m-2">{statement.statement}</h2>
    </div>
  </div>
);

export default Statement;
