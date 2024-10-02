# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- [Web Speech API supported voices](https://cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages)
- [react speech recognition docs](https://github.com/JamesBrill/react-speech-recognition/blob/HEAD/docs/API.md)

Currently, two official plugins are available:

- [openai_stt_nodejs](https://platform.openai.com/docs/guides/speech-to-text/quickstart?lang=node)
- [whisper_ai_asr_video](https://www.youtube.com/watch?v=_spinzpEeFM)
- [open_ai_pricing](https://openai.com/api/pricing/)
- [supabase_10k_singups_hack](https://www.youtube.com/watch?v=5T0SpSvptQ0)
- [web-speech-voices](https://github.com/HadrienGardeur/web-speech-recommended-voices?tab=readme-ov-file)
- https://stockcake.com/s/boy?ratio=square
- https://www.npmjs.com/package/ts-fsrs
- https://www.npmjs.com/package/fsrs.js
- https://developers.giphy.com/docs/api#quick-start-guide
- https://www.freepik.com/free-photo/mystery-box-with-gifts-concept_36298583.htm
- https://github.com/hacktronaut/azure-avatar-demo?tab=readme-ov-file
- https://smooth.talkrapp.com/#/play/VyB4gYHkoVnSX8VG6w1h
- https://github.com/talkr-app/gif-talkr
- https://www.aconvert.com/image/gif-to-apng/
- https://ezgif.com/optipng/ezgif-4-25dfe67ff9.png
- https://app.heygen.com/avatars/create-instant-avatar
- https://github.com/asanchezyali/talking-avatar-with-ai
- https://www.dante-ai.com/ai-avatars
- https://github.com/bornfree/talking_avatar
- https://studio.d-id.com/video-studio

## Logos
- https://www.design.com/maker/logo/fast-train-transportation-1914049?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/chat-play-button-109147?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/blue-messaging-application-120356?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/check-message-app-33130?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/bubble-dots-laundromat-44893?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/media-messaging-app-104535?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/mic-podcast-streaming-774684?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/music-podcast-sound-774683?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/audio-book-messaging-177159?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/cleaning-service-message-128377?text=TaleTalk&colorPalette=purple&isVariation=True
- https://www.design.com/maker/logo/chat-bubble-app-92099?text=TaleTalk&colorPalette=purple&isVariation=True

### Picked Logo
- https://www.design.com/maker/logo/podcast-chat-forum-774688?text=TaleTalk&colorPalette=purple&isVariation=True

### Tools for subtitles
- https://www.slicetube.io/
- https://turboscribe.ai/dashboard (Three 30m subs a day)


I want the following user flow to streamline the process.
1. Click the speaker icon to listen to the statement.
2. Then the statement turns into a question and I want to hear the question
3. as soon as the question speech ends, I want the microphone to be activated. It must remain inactive while the question is being spoken.
4. when I answer the question, I want the answer to be accepted automatically without me having to click the microphone button but if I don't provide an answer, I want to hear "Please speak up. I can't hear you." after which the microphone is re-activated. This process must be repeated every 5 seconds 3 times and after 3 times, an empty answer must be accepted as an incorrect answer. The no answer case should be followed by step 6. 
5. When I say the answer, I want to hear the comment on my answer whether it's correct or incorrect without me having to click the speaker icon
6. Then, I want to see the next question without having to click the next button
7. Then I want to hear the question without having to click the microphone again
8. once all the answers of a statement have been answered, just like the current logic, I want to hear the 2nd statement being spoken which is followed by a question. 
9. After this, the above steps 2 to 7 must be repeated until all the questions have been answered
10. Then the next statement must come but if there are no statements left with questions, the quiz ends as it does now.



1) Automatic answer acceptance:
set a silence timer that triggers after 3 seconds of no new speech input.
If there's an answer, it processes it automatically.
If there's no answer, it prompts "Please speak up. I can't hear you." and restarts listening.


2) Automatic feedback:
After processing the answer, it automatically speaks the feedback (correct/incorrect and comment).


3) Automatic progression:
After speaking the feedback, it automatically moves to the next question or completes the statement.


4) Automatic question or statement reading:
When a new question or statement is loaded, it automatically speaks it and starts listening.