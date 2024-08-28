import React from "react";
import { LoginButton } from '@telegram-auth/react';

function TgmApp() {

  return (
    <main className="flex justify-center items-center min-h-screen">
        <LoginButton
            botUsername="ReactAuthBot"
            authCallbackUrl="https://taletalk.vercel.app/"
            onAuthCallback={(data) => {
                console.log(data);
                // call your backend here to validate the data and sign in the user
            }}
            buttonSize="large" // "large" | "medium" | "small"
            cornerRadius={5} // 0 - 20
            showAvatar={true} // true | false
            lang="en"
        />
    </main>
  );
}

export default TgmApp;
