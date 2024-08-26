export const storydata = {
  quizTitle: "El Problema del Jinete Sin Cabeza",
  quizSynopsis: "",
  statements: [
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Hay un jinete sin cabeza.",
      statement_audio: "/aud/es/001_there_is.mp3",
      questions: [
        {
          question: "Hay un jinete sin cabeza?",
          question_audio: "/aud/es/002_is_there.mp3",
          translation: "Bormi bir boshli chavandoz?",
          answer: "sí",
          messageForAnswer: "Hay un jinete sin cabeza.",
          messageAudio: "/aud/es/001_there_is.mp3",
          explanation:
            "La pregunta es si hay un jinete sin cabeza, y la respuesta lo confirma.",
          point: "20",
        },
        {
          question: "¿Hay un jinete sin cabeza o un presidente?",
          question_audio:
            "/aud/es/003_or_president.mp3",
          translation: "Bormi bir boshli chavandoz yoki bir prezident?",
          answer: "jinete",
          messageForAnswer: "Hay un jinete sin cabeza.",
          messageAudio: "/aud/es/001_there_is.mp3",
          explanation:
            "La pregunta es si hay un jinete sin cabeza o un presidente. La respuesta confirma la presencia de un jinete sin cabeza.",
          point: "20",
        },
        {
          question: "Hay un presidente?",
          question_audio: "/aud/es/004_president.mp3",
          translation: "Bormi bir prezident?",
          answer: "no",
          messageForAnswer:
            "No hay un presidente. Hay un jinete sin cabeza.",
          messageAudio:
            "/aud/es/005_no_president.mp3",
          explanation:
            "La pregunta es si hay un presidente, y la respuesta lo niega, confirmando la presencia de un jinete sin cabeza en su lugar.",
          point: "20",
        },
        {
          question: "¿Qué hay?",
          question_audio: "/aud/es/006_what_is_there.mp3",
          translation: "Nima bor?",
          answer: "jinete",
          messageForAnswer: "Hay un jinete sin cabeza.",
          messageAudio: "/aud/es/001_there_is.mp3",
          explanation:
            "La pregunta es qué está presente, y la respuesta confirma la presencia de un jinete sin cabeza.",
          point: "20",
        },
      ],
    },

    {
      image: "https://picsum.photos/500",
      statement: "Él tiene un problema.",
      statement_audio: "/aud/es/007_problem.mp3",
      questions: [
        {
          question: "¿Tiene un problema?",
          question_audio: "/aud/es/008_problem_yes.mp3",
          translation: "Uning muammosi bormi?",
          answer: "sí",
          messageForAnswer: "Él tiene un problema.",
          messageAudio: "/aud/es/007_problem.mp3",
          explanation:
            "La pregunta es si él tiene un problema, y la respuesta confirma que sí.",
          point: "20",
        },
        {
          question: "¿Tiene un problema o una solución?",
          question_audio: "/aud/es/009_problem_or.mp3",
          translation: "Uning muammosi yoki echimi bormi?",
          answer: "problema",
          messageForAnswer: "Él tiene un problema.",
          messageAudio: "/aud/es/007_problem.mp3",
          explanation:
            "La pregunta es si él tiene un problema o una solución, y la respuesta confirma que tiene un problema.",
          point: "20",
        },
        {
          question: "¿Tiene una solución?",
          question_audio: "/aud/es/010_solution_yes.mp3",
          translation: "Uning echimi bormi?",
          answer: "no",
          messageForAnswer:
            "Él no tiene una solución. Él tiene un problema.",
          messageAudio:
            "/aud/es/011_solution_no.mp3",
          explanation:
            "La pregunta es si él tiene una solución, y la respuesta confirma que no, pero que tiene un problema.",
          point: "20",
        },
        {
          question: "¿Qué tiene?",
          question_audio: "/aud/es/012_problem_what.mp3",
          translation: "Uning nima bor?",
          answer: "problema",
          messageForAnswer: "Él tiene un problema.",
          messageAudio: "/aud/es/007_problem.mp3",
          explanation:
            "La pregunta es qué tiene él, y la respuesta confirma que tiene un problema.",
          point: "20",
        },
      ],
    },
    {
      image: "https://picsum.photos/499",
      statement: "Él va al médico.",
      statement_audio: "/aud/013_to_doctor.mp3",
      questions: [
        {
          question: "¿Va al médico?",
          question_audio: "/aud/014_to_doctor_yes.mp3",
          translation: "U shifokorga boradimi?",
          answer: "sí",
          messageForAnswer: "Él va al médico.",
          messageAudio: "/aud/013_to_doctor.mp3",
          explanation:
            "La pregunta es si él va al médico, y la respuesta confirma que sí.",
          point: "20",
        },
        {
          question: "¿Va al médico o al dentista?",
          question_audio: "/aud/015_to_doctor_or.mp3",
          translation: "U shifokorga yoki tish shifokoriga boradimi?",
          answer: "médico",
          messageForAnswer: "Él va al médico.",
          messageAudio: "/aud/013_to_doctor.mp3",
          explanation:
            "La pregunta es si él va al médico o al dentista, y la respuesta confirma que va al médico.",
          point: "20",
        },
        {
          question: "¿Va al dentista?",
          question_audio: "/aud/016_to_doctor_no.mp3",
          translation: "U tish shifokoriga boradimi?",
          answer: "no",
          messageForAnswer:
            "Él no va al dentista. Él va al médico.",
          messageAudio:
            "/aud/017_to_doctor_no_yes.mp3",
          explanation:
            "La pregunta es si él va al dentista, y la respuesta confirma que no, sino que va al médico.",
          point: "20",
        },
        {
          question: "¿A dónde va?",
          question_audio: "/aud/018_to_doctor_wh.mp3",
          translation: "U qayerga boradi?",
          answer: "médico",
          messageForAnswer: "Él va al médico.",
          messageAudio: "/aud/013_to_doctor.mp3",
          explanation:
            "La pregunta es a dónde va él, y la respuesta confirma que va al médico.",
          point: "20",
        },
      ],
    },
    {
      image: "https://picsum.photos/498",
      statement: 'El médico pregunta, "¿Cuál es tu problema?"',
      statement_audio: "/aud/019_doctor_ask.mp3",
      questions: [
        {
          question: '¿El médico pregunta, "¿Cuál es tu problema?"?',
          question_audio:
            "/aud/020_doctor_ask_yes.mp3",
          translation: 'Shifokor, "Sizning muammoingiz nima?" deb so‘raydimi?',
          answer: "sí",
          messageForAnswer:
            'El médico pregunta, "¿Cuál es tu problema?"',
          messageAudio: "/aud/019_doctor_ask.mp3",
          explanation:
            "La pregunta es si el médico pregunta sobre el problema del paciente, y la respuesta lo confirma.",
          point: "20",
        },
        {
          question:
            '¿El médico pregunta, "¿Cuál es tu problema?" o "¿Cómo estás?"',
          question_audio:
            "/aud/021_doctor_ask_or.mp3",
          translation:
            'Shifokor, "Sizning muammoingiz nima?" yoki "Qalaysiz?" deb so‘raydimi?',
          answer: 'Cuál es tu problema?',
          messageForAnswer:
            'El médico pregunta, "¿Cuál es tu problema?"',
          messageAudio: "/aud/019_doctor_ask.mp3",
          explanation:
            "La pregunta contrasta entre dos posibles preguntas, y la respuesta confirma que el médico pregunta por el problema.",
          point: "20",
        },
        {
          question: '¿El médico pregunta, "¿Cómo estás?"',
          question_audio: "/aud/022_doctor_ask_no.mp3",
          translation: 'Shifokor, "Qalaysiz?" deb so‘raydimi?',
          answer: "no",
          messageForAnswer:
            'El médico no pregunta, "¿Cómo estás?". El médico pregunta, "¿Cuál es tu problema?".',
          messageAudio:
            "/aud/023_doctor_ask_no_yes.mp3",
          explanation:
            "La pregunta es si el médico pregunta sobre el estado general del paciente, y la respuesta lo niega, confirmando que el médico pregunta específicamente sobre el problema.",
          point: "20",
        },
        {
          question: '¿Qué pregunta el médico?',
          question_audio: "/aud/024_doctor_ask_wh.mp3",
          translation: "Shifokor nima deb so'raydi?",
          answer: 'El médico pregunta, "Cual es tu problema?"',
          messageForAnswer:
            'El médico pregunta, "¿Cuál es tu problema?"',
          messageAudio: "/aud/019_doctor_ask.mp3",
          explanation:
            "La pregunta es sobre qué pregunta el médico, y la respuesta confirma que el médico pregunta sobre el problema.",
          point: "20",
        },
      ],
    },
  ],
};


export const storydataEng = {
  quizTitle: "The Headless Horseman's Problem",
  quizSynopsis: "",
  statements: [
  {
    image:
      "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
    statement: "There is a headless horseman.",
    statement_audio: "/aud/001_there_is_a_headless_horseman.mp3",
    questions: [
      {
        question: "Is there a headless horseman?",
        question_audio: "/aud/002_is_there_a_headless_horseman.mp3",
        translation: "Bormi bir boshli chavandoz?",
        answer: "yes",
        messageForAnswer: "There is a headless horseman.",
        messageAudio: "/aud/001_there_is_a_headless_horseman.mp3",
        explanation:
          "The question asks if there is a headless horseman, and the answer confirms it.",
        point: "20",
      },
      {
        question: "Is there a headless horseman or a president?",
        question_audio:
          "/aud/003_is_there_a_headless_horseman_or_a_president.mp3",
        translation: "Bormi bir boshli chavandoz yoki bir prezident?",
        answer: "headless horseman",
        messageForAnswer: "There is a headless horseman.",
        messageAudio: "/aud/001_there_is_a_headless_horseman.mp3",
        explanation:
          "The question asks if there is a headless horseman or a president. The answer confirms the presence of a headless horseman.",
        point: "20",
      },
      {
        question: "Is there a president?",
        question_audio: "/aud/004_is_there_a_president.mp3",
        translation: "Bormi bir prezident?",
        answer: "no",
        messageForAnswer:
          "There is not a president. There is a headless horseman.",
        messageAudio:
          "/aud/005_there_is_not_a_president_there_is_a_headless_horseman.mp3",
        explanation:
          "The question asks if there is a president, and the answer negates it, confirming the presence of a headless horseman instead.",
        point: "20",
      },
      {
        question: "What is there?",
        question_audio: "/aud/006_what_is_there.mp3",
        translation: "Nima bor?",
        answer: "There is a headless horseman.",
        messageForAnswer: "There is a headless horseman.",
        messageAudio: "/aud/001_there_is_a_headless_horseman.mp3",
        explanation:
          "The question asks what is present, and the answer confirms the presence of a headless horseman.",
        point: "20",
      },
    ],
  },

  {
    image: "https://picsum.photos/500",
    statement: "He has a problem.",
    statement_audio: "/aud/007_he_has_a_problem.mp3",
    questions: [
      {
        question: "Does he have a problem?",
        question_audio: "/aud/008_does_he_have_a_problem.mp3",
        translation: "Uning muammosi bormi?",
        answer: "yes",
        messageForAnswer: "He has a problem.",
        messageAudio: "/aud/007_he_has_a_problem.mp3",
        explanation:
          "The question asks if he has a problem, and the answer confirms that he does.",
        point: "20",
      },
      {
        question: "Does he have a problem or a solution?",
        question_audio: "/aud/009_does_he_have_a_problem_or_a_solution.mp3",
        translation: "Uning muammosi yoki echimi bormi?",
        answer: "problem",
        messageForAnswer: "He has a problem.",
        messageAudio: "/aud/007_he_has_a_problem.mp3",
        explanation:
          "The question asks if he has a problem or a solution, and the answer confirms that he has a problem.",
        point: "20",
      },
      {
        question: "Does he have a solution?",
        question_audio: "/aud/010_does_he_have_a_solution.mp3",
        translation: "Uning echimi bormi?",
        answer: "no",
        messageForAnswer: "He does not have a solution. He has a problem.",
        messageAudio:
          "/aud/011_he_does_not_have_a_solution_he_has_a_problem.mp3",
        explanation:
          "The question asks if he has a solution, and the answer confirms that he does not, but he has a problem.",
        point: "20",
      },
      {
        question: "What does he have?",
        question_audio: "/aud/012_what_does_he_have.mp3",
        translation: "Uning nima bor?",
        answer: "He has a problem.",
        messageForAnswer: "He has a problem.",
        messageAudio: "/aud/007_he_has_a_problem.mp3",
        explanation:
          "The question asks what he has, and the answer confirms that he has a problem.",
        point: "20",
      },
    ],
  },
  {
    image: "https://picsum.photos/499",
    statement: "He goes to a doctor.",
    statement_audio: "/aud/013_he_goes_to_a_doctor.mp3",
    questions: [
      {
        question: "Does he go to a doctor?",
        question_audio: "/aud/014_does_he_go_to_a_doctor.mp3",
        translation: "U shifokorga boradimi?",
        answer: "yes",
        messageForAnswer: "He goes to a doctor.",
        messageAudio: "/aud/013_he_goes_to_a_doctor.mp3",
        explanation:
          "The question asks if he goes to a doctor, and the answer confirms that he does.",
        point: "20",
      },
      {
        question: "Does he go to a doctor or a dentist?",
        question_audio: "/aud/015_does_he_go_to_a_doctor_or_a_dentist.mp3",
        translation: "U shifokorga yoki tish shifokoriga boradimi?",
        answer: "doctor",
        messageForAnswer: "He goes to a doctor.",
        messageAudio: "/aud/013_he_goes_to_a_doctor.mp3",
        explanation:
          "The question asks if he goes to a doctor or a dentist, and the answer confirms that he goes to a doctor.",
        point: "20",
      },
      {
        question: "Does he go to a dentist?",
        question_audio: "/aud/016_does_he_go_to_a_dentist.mp3",
        translation: "U tish shifokoriga boradimi?",
        answer: "no",
        messageForAnswer: "He does not go to a dentist. He goes to a doctor.",
        messageAudio:
          "/aud/017_he_does_not_go_to_a_dentist_he_goes_to_a_doctor.mp3",
        explanation:
          "The question asks if he goes to a dentist, and the answer confirms that he does not, but he goes to a doctor instead.",
        point: "20",
      },
      {
        question: "Where does he go?",
        question_audio: "/aud/018_where_does_he_go.mp3",
        translation: "U qayerga boradi?",
        answer: "He goes to a doctor.",
        messageForAnswer: "He goes to a doctor.",
        messageAudio: "/aud/013_he_goes_to_a_doctor.mp3",
        explanation:
          "The question asks where he goes, and the answer confirms that he goes to a doctor.",
        point: "20",
      },
    ],
  },
  {
    image: "https://picsum.photos/498",
    statement: 'The doctor asks, "What\'s your problem?"',
    statement_audio: "/aud/019_the_doctor_asks_what_s_your_problem.mp3",
    questions: [
      {
        question: 'Does the doctor ask, "What\'s your problem?"',
        question_audio: "/aud/020_does_the_doctor_ask_what_s_your_problem.mp3",
        translation: 'Shifokor, "Sizning muammoingiz nima?" deb so‘raydimi?',
        answer: "yes",
        messageForAnswer: 'The doctor asks, "What\'s your problem?"',
        messageAudio: "/aud/019_the_doctor_asks_what_s_your_problem.mp3",
        explanation:
          "The question asks if the doctor inquires about the patient's problem, and the answer confirms that he does.",
        point: "20",
      },
      {
        question:
          'Does the doctor ask, "What\'s your problem?" or "How are you?"',
        question_audio:
          "/aud/021_does_the_doctor_ask_what_s_your_problem_or_how_are_you.mp3",
        translation:
          'Shifokor, "Sizning muammoingiz nima?" yoki "Qalaysiz?" deb so‘raydimi?',
        answer: '"What\'s your problem?"',
        messageForAnswer: 'The doctor asks, "What\'s your problem?"',
        messageAudio: "/aud/019_the_doctor_asks_what_s_your_problem.mp3",
        explanation:
          "The question contrasts between two possible inquiries, and the answer confirms that the doctor asks about the problem.",
        point: "20",
      },
      {
        question: 'Does the doctor ask, "How are you?"',
        question_audio: "/aud/022_does_the_doctor_ask_how_are_you.mp3",
        translation: 'Shifokor, "Qalaysiz?" deb so‘raydimi?',
        answer: "no",
        messageForAnswer:
          'The doctor does not ask, "How are you?" The doctor asks, "What\'s your problem?"',
        messageAudio:
          "/aud/023_the_doctor_does_not_ask_how_are_you_the_doctor_asks_what_s_your_problem.mp3",
        explanation:
          "The question asks if the doctor inquires about general well-being, and the answer negates it, confirming that the doctor asks about the problem instead.",
        point: "20",
      },
      {
        question: "What does the doctor ask?",
        question_audio: "/aud/024_what_does_the_doctor_ask.mp3",
        translation: "Shifokor nima deb so‘raydi?",
        answer: 'The doctor asks, "What\'s your problem?"',
        messageForAnswer: 'The doctor asks, "What\'s your problem?"',
        messageAudio: "/aud/019_the_doctor_asks_what_s_your_problem.mp3",
        explanation:
          "The question asks what the doctor inquires about, and the answer confirms that the doctor asks about the problem.",
        point: "20",
      },
    ],
  },

  {
    image: "https://picsum.photos/497",
    statement: 'The headless horseman says, "I have a headache."',
    statement_audio:
      "/aud/025_the_headless_horseman_says_i_have_a_headache.mp3",
    questions: [
      {
        question: 'Does the headless horseman say, "I have a headache?"',
        question_audio:
          "/aud/026_does_the_headless_horseman_say_i_have_a_headache.mp3",
        translation:
          'Boshli chavandoz, "Mening boshim og\'riyapti" deb aytadimi?',
        answer: "yes",
        messageForAnswer: 'The headless horseman says, "I have a headache."',
        messageAudio:
          "/aud/025_the_headless_horseman_says_i_have_a_headache.mp3",
        explanation:
          "The question asks if the headless horseman mentions having a headache, and the answer confirms that he does.",
        point: "20",
      },
      {
        question:
          'Does the headless horseman say, "I have a headache" or "I have no head?"',
        question_audio:
          "/aud/027_does_the_headless_horseman_say_i_have_a_headache_or_i_have_no_head.mp3",
        translation:
          'Boshli chavandoz, "Mening boshim og\'riyapti" yoki "Mening boshim yo\'q" deb aytadimi?',
        answer: '"I have a headache."',
        messageForAnswer: 'The headless horseman says, "I have a headache."',
        messageAudio:
          "/aud/025_the_headless_horseman_says_i_have_a_headache.mp3",
        explanation:
          "The question contrasts two possible statements, and the answer confirms that the headless horseman mentions having a headache.",
        point: "20",
      },
      {
        question: 'Does the headless horseman say, "I have no head?"',
        question_audio:
          "/aud/028_does_the_headless_horseman_say_i_have_no_head.mp3",
        translation: 'Boshli chavandoz, "Mening boshim yo\'q" deb aytadimi?',
        answer: "no",
        messageForAnswer:
          'The headless horseman does not say, "I have no head." The headless horseman says, "I have a headache."',
        messageAudio:
          "/aud/029_the_headless_horseman_does_not_say_i_have_no_head_the_headless_horseman_says_i_have_a_headache.mp3",
        explanation:
          "The question asks if the headless horseman mentions not having a head, and the answer negates this, confirming that he says he has a headache instead.",
        point: "20",
      },
      {
        question: "What does the headless horseman say?",
        question_audio: "/aud/030_what_does_the_headless_horseman_say.mp3",
        translation: "Boshli chavandoz nima deydi?",
        answer: 'The headless horseman says, "I have a headache."',
        messageForAnswer: 'The headless horseman says, "I have a headache."',
        messageAudio:
          "/aud/025_the_headless_horseman_says_i_have_a_headache.mp3",
        explanation:
          "The question asks what the headless horseman says, and the answer confirms that he mentions having a headache.",
        point: "20",
      },
    ],
  },
]};

export const storydataTest = {
  quizTitle: "The Headless Horseman's Problem",
  quizSynopsis: "",
  statements: [
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "There is a headless horseman",
      statement_audio: "/aud/story1_statement1.mp3",
      questions: [
        {
          question: "Is there a horseman? Yes or no?",
          question_audio: "/aud/story1_question1.wav",
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
          explanation:
            "There is a student 'bor bir student' degan manoni anglatadi",
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
