import horseMan from '../../assets/img/headless_horseman.jpg';

export const storydata = {
    quizTitle: "The Headless Horseman's Problem",
    quizSynopsis: "",
    statements: [
      {
        image: "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
        statement: "There is a headless horseman",
        statement_audio: '/aud/story1_statement1.mp3',
        questions: [
          {
            question: "Is there a horseman? Yes or no?",
            question_audio: '/aud/story1_question1.mp3',
            translation: "Bormi bir chavandoz?",
            answer: "yes",
            messageForAnswer: "There is a horseman",
            explanation: "Is there 'Bormi' degan manoni anglatadi",
            point: "20",
          },
          {
            question: "Is there a horseman or a student?",
            translation: "Bormi bir chavandoz yoki bir student?",
            answer: "horseman",
            messageForAnswer: "There is a horseman.",
            explanation: "There is a student 'bor bir student' degan manoni anglatadi",
            point: "20",
          },
        ],
      },
      {
        image: "https://picsum.photos/499",
        statement: "He has a problem",
        questions: [
          {
            question: "Who has a problem?",
            translation: "Kimda bor muammo?",
            answer: "horseman",
            messageForAnswer: "The horseman has a problem",
            explanation: "Has 'bor' yoki 'ega' degan manoni anglatadi",
            point: "20",
          },
          {
            question: "Does a student have a problem?",
            translation: "Bormi bir studentda bir muammo?",
            answer: "no",  
            messageForAnswer: "A student does not have a problem",
            explanation: "Does not have 'unda yoq' yoki degan manoni anglatadi",
            point: "20",
          },
        ],
      },
    ],
  };