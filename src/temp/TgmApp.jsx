import React from "react";
import TgmLoginBtn from "./TgmLoginBtn";

function TgmApp() {
  const botName = "ReactAuthBot"; // Bot name from BotFather
  const handleBot = (user) => {
    console.log(user);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <TgmLoginBtn
        botName={botName}
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={3} // 0 - 20
        usePic={true} // true | false
        dataOnauth={handleBot}
      />
    </main>
  );
}

export default TgmApp;
