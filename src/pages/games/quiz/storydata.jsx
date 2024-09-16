import { v4 as uuid } from 'uuid'
console.log('uuid: ',uuid())

// TEST data below
export const story1Statements = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
    statement: "Hay un jinete",
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
    statement: "Hay un jinete sin cabeza",
  },
];

export const story1Questions = [
  {
    id: 1,
    statementId: 1,
    question: "Hay un jinete?",
    image:"",
    translation: "Is there a horseman?",
    answer: "sí",
    message: "Hay un jinete.",
    explanation: "This is the question and 'Hay' means 'There is'",
    point: 20,
  },
  {
    id: 2,
    statementId: 1,
    question: "¿Hay un chico?",
    image:"",
    translation: "Is there a boy?",
    answer: "No",
    message: "No hay un chico. Hay un jinete.",
    explanation: "'Un' is the word 'a' in English",
    point: 20,
  },
  {
    id: 3,
    statementId: 2,
    question: "¿Hay una chica?",
    image:"",
    translation: "Is there a girl?",
    answer: "No",
    message: "No hay una chica. Hay un jinete.",
    explanation: "'Una' too is the word 'a'",
    point: 20,
  },
  {
    id: 4,
    statementId: 2,
    question: "¿Hay una chica o un jinete?",
    image:"",
    translation: "Is there a girl or a horseman?",
    answer: "No",
    message: "Hay un jinete.",
    explanation: "'O' means 'or'",
    point: 20,
  },
  {
    id: 5,
    statementId: 2,
    question: "Hay un presidente?",
    image:"",
    translation: "Bormi bir prezident?",
    answer: "no",
    message: "No hay un presidente. Hay un jinete.",
    explanation: "'Presidente' means 'president'",
    point: 20,
  },
]

export const storydataTestJinete = {
  quizTitle: "El Problema del Jinete Sin Cabeza",
  quizSynopsis: "",
  statements: [
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Hay un jinete",
      questions: [
        {
          question: "Hay un jinete?",
          translation: "Bormi bir boshli chavandoz?",
          answer: "sí",
          message: "Hay un jinete.",
          explanation: "'Hay' means 'There is'",
          point: "20",
        },
        {
          question: "¿Hay un chico?",
          translation: "Bormi bir bola?",
          answer: "No",
          message: "No hay un chico. Hay un jinete.",
          explanation: "'Un' is the word 'a' in English",
          point: "20",
        },
        {
          question: "¿Hay una chica?",
          translation: "Bormi bir boshli chavandoz yoki bir prezident?",
          answer: "No",
          message: "No hay una chica. Hay un jinete.",
          explanation: "'Una' too is the word 'a'",
          point: "20",
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Hay un jinete sin cabeza.",
      questions: [
        {
          question: "Hay un jinete sin cabeza?",
          translation: "Bormi bir boshli chavandoz?",
          answer: "sí",
          message: "Hay un jinete sin cabeza.",
          explanation: "La pregunta es si hay un jinete sin cabeza, y la respuesta lo confirma.",
          point: "20",
        },
        {
          question: "¿Hay un jinete sin cabeza o un banana?",
          translation: "Bormi bir boshli chavandoz yoki bir banan?",
          answer: "jinete",
          message: "Hay un jinete sin cabeza.",
          explanation: "La pregunta es si hay un jinete sin cabeza o un banana. La respuesta confirma la presencia de un jinete sin cabeza.",
          point: "20",
        },
      ],
    },
  ],
};

export const TPRS_2_0 = {
  quizTitle: "El Problema del Chico",
  quizSynopsis: "",
  statements: [
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Hay un chico",
      explanation: "",
      retell: "",
      questions: [
        {
          question: "Hay un chico?",
          answer: "sí",
          message: "Hay un chico.",
          point: "20",
        },
        {
          question: "¿Hay una chica?",
          answer: "No",
          message: "No hay un chica. Hay un chico.",
          point: "20",
        },
        {
          question: "¿Hay un gato?",
          answer: "No",
          message: "No hay un gato. Hay un chico.",
          point: "20",
        },
        {
          question: "¿Hay un elefante, hay un chico o hay un gato?",
          answer: "No",
          message: "Hay un chico.",
          point: "20",
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "El chico es George",
      explanation: "",
      retell: "",
      questions: [
        {
          question: "El chico es Henry?",
          answer: "sí",
          message: "El chico no es Henry. El chico es George.",
          point: "20",
        },
        {
          question: "¿El chico es George o Henry?",
          answer: "jinete",
          message: "El chico es George.",
          point: "20",
        },
        {
          question: "El chico es Billy?",
          answer: "sí",
          message: "El chico no es Billy. El chico es George.",
          point: "20",
        },
        {
          question: "Quién es el chico?",
          answer: "George",
          message: "George es el chico",
          point: "20",
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Hay un chico. No hay un gato. No hay un mosquito. Hay un chico y el chico es George.",
      explanation: "Now, the way we do this is, you are George. I'm going to call on you and call you Judy George or Billy George. And then you're going to know that I'm calling on Judy, but you're going to always remember that you are George. As we go on, we'll have a few exceptions to this as we add other characters. But that's how we do it",
      retell: "",
      questions: [
        {
          question: "Tu eres un chico?",
          answer: "sí yo soy un chico",
          message: "Tu eres un chico",
          point: "20",
        },
        {
          question: "¿Tu eres un chico o tu eres un elefante?",
          answer: "yo soy un chico",
          message: "Tu eres un chico. Tu no eres un elefante. Tu eres un chico",
          point: "20",
        },
        {
          question: "¿Tu eres George o tu eres Billy?",
          answer: "yo soy George",
          message: "Tu no eres Billy. Tu eres George.",
          point: "20",
        },
        {
          question: "¿Tu eres Henry?",
          answer: "No. Yo soy George",
          message: "Tu eres George",
          point: "20",
        },
        {
          question: "¿Tu eres un chico o tu eres un búfalo?",
          answer: "Yo soy chico",
          message: "Tu eres un chico",
          point: "20",
        },
        {
          question: "¿Tu eres George o tu eres William?",
          answer: "Yo soy George",
          message: "Tu eres George",
          point: "20",
        },
        {
          question: "¿Quien eres?",
          answer: "Yo soy George",
          message: "Tu eres un chico. Y tu eres George",
          point: "20",
        },
        {
          question: "¿Tu eres un chico o tu eres un búfalo?",
          answer: "Yo soy un chico",
          message: "Tu eres un chico",
          point: "20",
        },
        {
          question: "¿Tu eres George o tu eres Marshall?",
          answer: "Yo soy George",
          message: "Tu eres George",
          point: "20",
        },
        {
          question: "¿Quien eres tu?",
          answer: "Yo soy un chico",
          message: "Tu eres George",
          point: "20",
        },
        {
          question: "¿Que eres tu?",
          answer: "Soy el chico",
          message: "Tu eres un chico. Y tu eres el chico.",
          point: "20",
        },
        {
          question: "¿Tu eres un búfalo o tu eres un chico?",
          answer: "No soy un búfalo. Soy un chico",
          message: "Tu no eres un búfalo. Tu eres un chico.",
          point: "20",
        },
        {
          question: "¿Tu eres un búfalo?",
          answer: "No soy un búfalo",
          message: "Tu no eres un búfalo. Tu eres un chico.",
          point: "20",
        },
        {
          question: "¿Tu eres George?",
          answer: "sí soy George",
          message: "Tu eres George.",
          point: "20",
        },
        {
          question: "¿Tu eres un mosquito?",
          answer: "No. Yo soy un chico",
          message: "Tu no eres un mosquito. Tu eres un chico.",
          point: "20",
        },
        {
          question: "¿Quien eres?",
          answer: "Yo soy George",
          message: "Tu eres George",
          point: "20",
        },
        {
          question: "¿Tu eres un búfalo?",
          answer: "Yo soy un chico",
          message: "Tu no eres un búfalo. Tu eres un chico.",
          point: "20",
        },
        {
          question: "¿Tu eres un mosquito o tu eres un chico?",
          answer: "Yo soy un chico",
          message: "Tu no eres un mosquito. Tu eres un chico.",
          point: "20",
        },
        {
          question: "¿Tu eres un elefante?",
          answer: "No soy un elefante. Yo soy un chico.",
          message: "Tu no eres un elefante. Tu eres un chico.",
          point: "20",
        },
        {
          question: "¿Tu eres un chico?",
          answer: "Yo soy un chico.",
          message: "Tu eres un chico",
          point: "20",
        },
        {
          question: "¿Tu eres un gato?",
          answer: "No. Yo soy un chico.",
          message: "Tu eres un chico",
          point: "20",
        },
        {
          question: "¿Quien es el chico?",
          answer: "Yo soy un chico.",
          message: "Tu eres un chico",
          point: "20",
        },
        {
          question: "¿Tu eres un gato?",
          answer: "No. Yo soy un chico.",
          message: "Tu no eres un gato. Tu eres un chico.",
          point: "20",
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Hay un chico. El chico es George. George es un chico normal. No es diferente. Yo soy Petey. Yo soy Petey la Pizza. I have to rename myself. Now you know who I am. Yo soy una pizza. Yo soy Petey. Yo soy una pizza. Yo soy una pizza interesante. Muy interesante.",
      explanation: "Now, la is the, so they have another way of saying la. Petey la pizza. Yo soy Petey la pizza. So with pizza, they say una pizza. With chico, they say un for a. So un and una are the same thing. It's just to use una with pizza and use un with chico.",
      retell: "",
      questions: [
        {
          question: "¿Soy una pizza normal?",
          answer: "no",
          message: "Ridiculo. No soy una pizza normal. Soy una pizza interesante. Tu no eres una pizza. Tu eres un chico. Tu eres un chico normal. Yo soy una pizza diferente.",
          point: "20",
        },
        {
          question: "Tu eres George. Yo soy Petey. Tu eres un chico. Yo soy una pizza. Es una situación interesante. ¿Quien es el chico?",
          answer: "Yo soy el chico",
          message: "Obvio. Tu eres el chico",
          point: "20",
        },
        {
          question: "¿Quien es la pizza?",
          answer: "Tu eres la pizza",
          message: "Yo soy la pizza. Y tu eres el chico",
          point: "20",
        },
        {
          question: "¿Tu eres un chico normal o diferente?",
          answer: "Soy un chico normal",
          message: "Obvio, correcto. Tu no eres diferente. Tu eres un chico normal.",
          point: "20",
        },
        {
          question: "¿Yo soy un pizza, una pizza normal?",
          answer: "No, tu eres una pizza diferente",
          message: "Yo no soy una pizza normal. Yo soy una pizza diferente.  ",
          point: "20",
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Tu no eres diferente. Tu eres un chico normal.",
      questions: [
        {
          question: "Compara mi situación con tu situación",
          answer: "Yo soy el chico. Yo soy George. Tu eres una pizza. Tu eres Petey la pizza. Yo soy un chico normal. Tu eres una pizza diferente.",
          message: "Tu eres un chico. Tu no eres una pizza. Tu eres un chico normal. Yo soy una pizza. Yo soy pidi. Tu eres George. Tu eres un chico normal. Yo soy una pizza interesante. Y soy una pizza diferente. Es una situación muy interesante.",
          point: "20",
        },
        {
          question: "Tu eres un chico. Tu eres George. Muy interesante, pero tu eres normal. Yo soy Petey. Yo soy Petey la pizza. Yo soy una pizza muy interesante. Compara tu situacion con mi situacion.",
          answer: "Yo soy George. Yo soy un chico normal. Tu eres Petey. Tu eres pizza. Tu eres Petey la pizza. Tu eres pizza diferente.",
          message: "Yo soy Petey la pizza. Yo soy una pizza diferente. Yo soy pidi la pizza. Yo soy una pizza diferente. Tu eres un chico normal.",
          point: "20",
        },
        {
          question: "Tu eres George. Tu eres un chico. Yo Yo soy una pizza, yo soy Petey, Petey la pizza. Yo soy diferente, tu eres normal. Compara tu situacion con mi situacion.",
          answer: "Yo soy un chico, yo soy George, yo soy normal. Tu eres una pizza, tu eres normal. Muy interesante, tu eres diferente.",
          message: "No hay un jinete con cabeza. Hay un jinete sin cabeza.",
          point: "20",
        },
        {
          question: "Tu eres George, tu eres un chico, tu eres un chico normal. Yo no soy un chico, yo soy una pizza. Yo soy una pizza interesante. Tu eres un chico normal. Compara tu situacion con mi situacion.",
          answer: "Tu eres pizza diferente y interesante.",
          message: "Yo soy Petey y tu eres George. Muy interesante.",
          point: "20",
        },
        {
          question: "Tu eres George. Tu eres un chico. Yo soy una pizza. Yo soy Petey. Yo soy diferente y tu eres normal. Compara tu situacion con mi situacion.",
          answer: "Yo soy George, yo soy el chico. Yo soy chico normal. Tu eres Petey. Tu eres Petey la pizza. Tu eres interesante.",
          message: "Yo soy Petey. Soy Petey la pizza. Yo soy interesante. Tu eres normal. Tu eres un chico normal. Yo no soy normal, yo soy interesante.",
          point: "20",
        },
        {
          question: "Tu eres George. Tu eres un chico. Yo soy Petey, yo soy una pizza. Yo soy interesante. Tu no, tu eres normal. Yo soy interesante. Describe la situacion. Compare tu situacion con mi situacion.",
          answer: "Yo soy chico. Yo soy chico normal. Tu eres pizza y yo soy el chico.",
          message: "Celebracion, excelente, muy bien.",
          point: "20",
        },
        {
          question: "Describe la situacion",
          answer: "Yo soy George, yo soy un chico normal. Tu eres la pizza. Tu eres Petey la pizza y muy interesante.",
          message: "Celebracion, excelente, muy bien.",
          point: "20",
        },
        {
          question: "Yo soy interesante. Yo soy una pizza interesante. Tu eres George, tu no eres una pizza. Yo soy una pizza. Yo soy Petey. Describe la situacion. Compara mi situacion con tu situacion.",
          answer: "Yo soy un chico. Yo soy George. Tu eres Petey. Tu eres interesting. Tu eres pizza. Yo soy normal.",
          message: "Celebracion, excelente. Muy bien.",
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
      questions: [
        {
          question: "Is there a headless horseman?",
          translation: "Bormi bir boshli chavandoz?",
          answer: "yes",
          message: "There is a headless horseman.",
          explanation: "The question asks if there is a headless horseman, and the answer confirms it.",
          point: "20",
        },
        {
          question: "Is there a headless horseman or a president?",
          translation: "Bormi bir boshli chavandoz yoki bir prezident?",
          answer: "headless horseman",
          message: "There is a headless horseman.",
          explanation: "The question asks if there is a headless horseman or a president. The answer confirms the presence of a headless horseman.",
          point: "20",
        },
        {
          question: "Is there a president?",
          translation: "Bormi bir prezident?",
          answer: "no",
          message:
            "There is not a president. There is a headless horseman.",
          explanation: "The question asks if there is a president, and the answer negates it, confirming the presence of a headless horseman instead.",
          point: "20",
        },
        {
          question: "What is there?",
          translation: "Nima bor?",
          answer: "There is a headless horseman.",
          message: "There is a headless horseman.",
          explanation: "The question asks what is present, and the answer confirms the presence of a headless horseman.",
          point: "20",
        },
      ],
    },

    {
      image: "https://picsum.photos/500",
      statement: "He has a problem.",
      questions: [
        {
          question: "Does he have a problem?",
          translation: "Uning muammosi bormi?",
          answer: "yes",
          message: "He has a problem.",
          explanation: "The question asks if he has a problem, and the answer confirms that he does.",
          point: "20",
        },
        {
          question: "Does he have a problem or a solution?",
          translation: "Uning muammosi yoki echimi bormi?",
          answer: "problem",
          message: "He has a problem.",
          explanation: "The question asks if he has a problem or a solution, and the answer confirms that he has a problem.",
          point: "20",
        },
        {
          question: "Does he have a solution?",
          translation: "Uning echimi bormi?",
          answer: "no",
          message: "He does not have a solution. He has a problem.",
          explanation: "The question asks if he has a solution, and the answer confirms that he does not, but he has a problem.",
          point: "20",
        },
        {
          question: "What does he have?",
          translation: "Uning nima bor?",
          answer: "He has a problem.",
          message: "He has a problem.",
          explanation: "The question asks what he has, and the answer confirms that he has a problem.",
          point: "20",
        },
      ],
    },
    {
      image: "https://picsum.photos/499",
      statement: "He goes to a doctor.",
      questions: [
        {
          question: "Does he go to a doctor?",
          translation: "U shifokorga boradimi?",
          answer: "yes",
          message: "He goes to a doctor.",
          explanation: "The question asks if he goes to a doctor, and the answer confirms that he does.",
          point: "20",
        },
        {
          question: "Does he go to a doctor or a dentist?",
          translation: "U shifokorga yoki tish shifokoriga boradimi?",
          answer: "doctor",
          message: "He goes to a doctor.",
          explanation: "The question asks if he goes to a doctor or a dentist, and the answer confirms that he goes to a doctor.",
          point: "20",
        },
        {
          question: "Does he go to a dentist?",
          translation: "U tish shifokoriga boradimi?",
          answer: "no",
          message: "He does not go to a dentist. He goes to a doctor.",
          explanation: "The question asks if he goes to a dentist, and the answer confirms that he does not, but he goes to a doctor instead.",
          point: "20",
        },
        {
          question: "Where does he go?",
          translation: "U qayerga boradi?",
          answer: "He goes to a doctor.",
          message: "He goes to a doctor.",
          explanation: "The question asks where he goes, and the answer confirms that he goes to a doctor.",
          point: "20",
        },
      ],
    },
    {
      image: "https://picsum.photos/498",
      statement: 'The doctor asks, "What\'s your problem?"',
      questions: [
        {
          question: 'Does the doctor ask, "What\'s your problem?"',
          translation: 'Shifokor, "Sizning muammoingiz nima?" deb soraydimi?',
          answer: "yes",
          message: 'The doctor asks, "What\'s your problem?"',
          explanation: "The question asks if the doctor inquires about the patient's problem, and the answer confirms that he does.",
          point: "20",
        },
        {
          question:
            'Does the doctor ask, "What\'s your problem?" or "How are you?"',
          translation:
            'Shifokor, "Sizning muammoingiz nima?" yoki "Qalaysiz?" deb soraydimi?',
          answer: '"What\'s your problem?"',
          message: 'The doctor asks, "What\'s your problem?"',
          explanation: "The question contrasts between two possible inquiries, and the answer confirms that the doctor asks about the problem.",
          point: "20",
        },
        {
          question: 'Does the doctor ask, "How are you?"',
          translation: 'Shifokor, "Qalaysiz?" deb soraydimi?',
          answer: "no",
          message: 'The doctor does not ask, "How are you?" The doctor asks, "What\'s your problem?"',
          explanation: "The question asks if the doctor inquires about general well-being, and the answer negates it, confirming that the doctor asks about the problem instead.",
          point: "20",
        },
        {
          question: "What does the doctor ask?",
          translation: "Shifokor nima deb soraydi?",
          answer: 'The doctor asks, "What\'s your problem?"',
          message: 'The doctor asks, "What\'s your problem?"',
          explanation: "The question asks what the doctor inquires about, and the answer confirms that the doctor asks about the problem.",
          point: "20",
        },
      ],
    },

    {
      image: "https://picsum.photos/497",
      statement: 'The headless horseman says, "I have a headache."',
      statement_aud:
        "/aud/025_the_headless_horseman_says_i_have_a_headache.mp3",
      questions: [
        {
          question: 'Does the headless horseman say, "I have a headache?"',
          translation:
            'Boshli chavandoz, "Mening boshim og\'riyapti" deb aytadimi?',
          answer: "yes",
          message: 'The headless horseman says, "I have a headache."',
          explanation: "The question asks if the headless horseman mentions having a headache, and the answer confirms that he does.",
          point: "20",
        },
        {
          question: 'Does the headless horseman say, "I have a headache" or "I have no head?"',
          translation: 'Boshli chavandoz, "Mening boshim og\'riyapti" yoki "Mening boshim yo\'q" deb aytadimi?',
          answer: '"I have a headache."',
          message: 'The headless horseman says, "I have a headache."',
          explanation: "The question contrasts two possible statements, and the answer confirms that the headless horseman mentions having a headache.",
          point: "20",
        },
        {
          question: 'Does the headless horseman say, "I have no head?"',
          translation: 'Boshli chavandoz, "Mening boshim yo\'q" deb aytadimi?',
          answer: "no",
          message: 'The headless horseman does not say, "I have no head." The headless horseman says, "I have a headache."',
          explanation: "The question asks if the headless horseman mentions not having a head, and the answer negates this, confirming that he says he has a headache instead.",
          point: "20",
        },
        {
          question: "What does the headless horseman say?",
          translation: "Boshli chavandoz nima deydi?",
          answer: 'The headless horseman says, "I have a headache."',
          message: 'The headless horseman says, "I have a headache."',
          explanation: "The question asks what the headless horseman says, and the answer confirms that he mentions having a headache.",
          point: "20",
        },
      ],
    },
  ],
};

// PROD data below
export const storydata = {
  quizTitle: "El Problema del Jinete Sin Cabeza",
  quizSynopsis: "",
  statements: [
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Hay un jinete",
      questions: [
        {
          question: "Hay un jinete?",
          translation: "Is there a horseman?",
          answer: "sí",
          message: "Hay un jinete.",
          explanation: "'Hay' means 'There is'",
          point: "20",
        },
        {
          question: "¿Hay un chico?",
          translation: "Is there a boy?",
          answer: "No",
          message: "No hay un chico. Hay un jinete.",
          explanation: "'Un' is the word 'a' in English",
          point: "20",
        },
        {
          question: "¿Hay una chica?",
          translation: "Is there a girl?",
          answer: "No",
          message: "No hay una chica. Hay un jinete.",
          explanation: "'Una' too is the word 'a'",
          point: "20",
        },
        {
          question: "¿Hay una chica o un jinete?",
          translation: "Is there a girl or a horseman?",
          answer: "No",
          message: "Hay un jinete.",
          explanation: "'O' means 'or'",
          point: "20",
        },
        {
          question: "Hay un presidente?",
          translation: "Is there a president?",
          answer: "no",
          message: "No hay un presidente. Hay un jinete.",
          explanation: "'Presidente' means 'president'",
          point: "20",
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "Hay un jinete sin cabeza.",
      questions: [
        {
          question: "Hay un jinete sin cabeza?",
          translation: "Is there a horseman without a head?",
          answer: "sí",
          message: "Hay un jinete sin cabeza.",
          explanation: "'sin' means 'without' in English",
          point: "20",
        },
        {
          question: "¿Hay un jinete sin cabeza o con cabeza?",
          translation: "Is there a horseman without a head or with a head?",
          answer: "sin cabeza",
          message: "Hay un jinete sin cabeza.",
          explanation: "'con' means 'with' in English",
          point: "20",
        },
        {
          question: "¿Hay un jinete con cabeza?",
          translation: "Is there a horseman with a head?",
          answer: "no",
          message: "No hay un jinete con cabeza. Hay un jinete sin cabeza.",
          explanation: "",
          point: "20",
        },
        {
          question: "¿Qué hay?",
          translation: "What is there?",
          answer: "jinete",
          message: "Hay un jinete sin cabeza.",
          explanation: "",
          point: "20",
        },
      ],
    },
    
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "El jinete es famoso",
      questions: [
        {
          question: "¿Es el jinete famoso?",
          translation: "Is the horseman famous?",
          answer: "sí",
          message: "El jinete es famoso.",
          explanation: "'Es' means 'is' in English",
          point: "20",
        },
        {
          question: "¿Es el jinete famoso o terrible?",
          translation: "Is the horseman famous or terrible?",
          answer: "famoso",
          message: "El jinete es famoso",
          explanation: "'famoso' means 'famous' in English",
          point: "20",
        },
        {
          question: "¿Es el jinete terrible?",
          translation: "Is the horseman famous?",
          answer: "no",
          message: "El jinete no es terrible. Es famoso.",
          explanation: "'no es' means 'is not' in English",
          point: "20",
        },
        {
          question: "¿Cómo es el jinete?",
          translation: "How is the horseman?",
          answer: "famoso",
          message: "El jinete es famoso",
          explanation: "'Cómo' means 'how' in English",
          point: "20",
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "El jinete es un americano famoso",
      questions: [
        {
          question: "¿Es el jinete un americano famoso?",
          translation: "Is the horseman American?",
          answer: "sí",
          message: "El jinete es americano.",
          explanation: "'El' means 'the' in English",
          point: "20",
        },
        {
          question: "¿Es el jinete un americano famoso o mexicano?",
          translation: "Is the horseman famous American or Mexican?",
          answer: "americano",
          message: "El jinete es americano",
          explanation: "",
          point: "20",
        },
        {
          question: "¿Es el jinete un famoso mexicano?",
          translation: "Is the horseman famous Mexican?",
          answer: "no",
          message: "El jinete no es un mexicano famoso. El jinete es un americano famoso.",
          explanation: "'no es' means 'is not' in English",
          point: "20",
        },
        {
          question: "¿Qué es el jinete?",
          translation: "What is the horseman?",
          answer: "americano",
          message: "El jinete es un americano famoso",
          explanation: "",
          point: "20",
        },
      ],
    },
    {
      image: "https://picsum.photos/500",
      statement: "Yo soy el jinete",
      questions: [
        {
          question: "¿Soy el jinete?",
          translation: "am I the horseman?",
          answer: "sí",
          message: "Soy el jinete",
          explanation: "'yo soy' means 'I I am' so you can leave out 'yo'",
          point: "20",
        },
        {
          question: "¿Soy el jinete o una banana?",
          translation: "am I the horseman or a banana?",
          answer: "jinete",
          message: "Soy el jinete",
          explanation: "'una banana' means 'a banana' in English",
          point: "20",
        },
        {
          question: "¿Soy una banana?",
          translation: "am I a banana?",
          answer: "no",
          message: "No soy una banana. Soy el jinete",
          explanation: "'no soy' literally means 'not I am'",
          point: "20",
        },
        {
          question: "¿Qué soy?",
          translation: "what am I?",
          answer: "jinete",
          message: "Soy el jinete",
          explanation: "'¿Qué' means 'what' in English",
          point: "20",
        },
      ],
    },    {
      image: "https://picsum.photos/500",
      statement: "Soy el jinete famoso",
      questions: [
        {
          question: "¿Soy el jinete famoso?",
          translation: "am I the famous horseman?",
          answer: "sí",
          message: "Soy el jinete famoso",
          explanation: "",
          point: "20",
        },
        {
          question: "¿Soy el jinete famoso o terrible?",
          translation: "am I the famous horseman or the terrible horseman?",
          answer: "famoso",
          message: "Soy el jinete famoso",
          explanation: "",
          point: "20",
        },
        {
          question: "¿Soy el jinete terrible?",
          translation: "am I the terrible horseman?",
          answer: "no",
          message: "No soy el jinete terrible. Soy el jinete famoso",
          explanation: "",
          point: "20",
        },
        {
          question: "¿Qué soy?",
          translation: "what am I?",
          answer: "famoso",
          message: "Soy el jinete famoso",
          explanation: "",
          point: "20",
        },
      ],
    },
    {
      image: "https://picsum.photos/500",
      statement: "Él tiene un problema.",
      questions: [
        {
          question: "¿Tiene un problema?",
          translation: "Uning muammosi bormi?",
          answer: "sí",
          message: "Él tiene un problema.",
          explanation: "La pregunta es si él tiene un problema, y la respuesta confirma que sí.",
          point: "20",
        },
        {
          question: "¿Tiene un problema o una solución?",
          translation: "Uning muammosi yoki echimi bormi?",
          answer: "problema",
          message: "Él tiene un problema.",
          explanation: "La pregunta es si él tiene un problema o una solución, y la respuesta confirma que tiene un problema.",
          point: "20",
        },
        {
          question: "¿Tiene una solución?",
          translation: "Uning echimi bormi?",
          answer: "no",
          message: "Él no tiene una solución. Él tiene un problema.",
          explanation: "La pregunta es si él tiene una solución, y la respuesta confirma que no, pero que tiene un problema.",
          point: "20",
        },
        {
          question: "¿Qué tiene?",
          translation: "Uning nima bor?",
          answer: "problema",
          message: "Él tiene un problema.",
          explanation: "La pregunta es qué tiene él, y la respuesta confirma que tiene un problema.",
          point: "20",
        },
      ],
    },
    {
      image: "https://picsum.photos/499",
      statement: "Él va al médico.",
      questions: [
        {
          question: "¿Va al médico?",
          translation: "U shifokorga boradimi?",
          answer: "sí",
          message: "Él va al médico.",
          explanation: "La pregunta es si él va al médico, y la respuesta confirma que sí.",
          point: "20",
        },
        {
          question: "¿Va al médico o al dentista?",
          translation: "U shifokorga yoki tish shifokoriga boradimi?",
          answer: "médico",
          message: "Él va al médico.",
          explanation: "La pregunta es si él va al médico o al dentista, y la respuesta confirma que va al médico.",
          point: "20",
        },
        {
          question: "¿Va al dentista?",
          translation: "U tish shifokoriga boradimi?",
          answer: "no",
          message: "Él no va al dentista. Él va al médico.",
          explanation: "La pregunta es si él va al dentista, y la respuesta confirma que no, sino que va al médico.",
          point: "20",
        },
        {
          question: "¿A dónde va?",
          translation: "U qayerga boradi?",
          answer: "médico",
          message: "Él va al médico.",
          explanation: "La pregunta es a dónde va él, y la respuesta confirma que va al médico.",
          point: "20",
        },
      ],
    },
    {
      image: "https://picsum.photos/498",
      statement: 'El médico pregunta, "¿Cuál es tu problema?"',
      questions: [
        {
          question: '¿El médico pregunta, "¿Cuál es tu problema?"?',
          translation: 'Shifokor, "Sizning muammoingiz nima?" deb soraydimi?',
          answer: "sí",
          message: 'El médico pregunta, "¿Cuál es tu problema?"',
          explanation: "La pregunta es si el médico pregunta sobre el problema del paciente, y la respuesta lo confirma.",
          point: "20",
        },
        {
          question:
            '¿El médico pregunta, "¿Cuál es tu problema?" o "¿Cómo estás?"',
          translation:
            'Shifokor, "Sizning muammoingiz nima?" yoki "Qalaysiz?" deb soraydimi?',
          answer: "Cuál es tu problema?",
          message: 'El médico pregunta, "¿Cuál es tu problema?"',
          explanation: "La pregunta contrasta entre dos posibles preguntas, y la respuesta confirma que el médico pregunta por el problema.",
          point: "20",
        },
        {
          question: '¿El médico pregunta, "¿Cómo estás?"',
          translation: 'Shifokor, "Qalaysiz?" deb soraydimi?',
          answer: "no",
          message:
            'El médico no pregunta, "¿Cómo estás?". El médico pregunta, "¿Cuál es tu problema?".',
          explanation: "La pregunta es si el médico pregunta sobre el estado general del paciente, y la respuesta lo niega, confirmando que el médico pregunta específicamente sobre el problema.",
          point: "20",
        },
        {
          question: "¿Qué pregunta el médico?",
          translation: "Shifokor nima deb so'raydi?",
          answer: 'El médico pregunta, "Cual es tu problema?"',
          message: 'El médico pregunta, "¿Cuál es tu problema?"',
          explanation: "La pregunta es sobre qué pregunta el médico, y la respuesta confirma que el médico pregunta sobre el problema.",
          point: "20",
        },
      ],
    },
  ],
};

export const steps1 = [
  {
    content: <h2 className="text-xl">Let's answer some questions!</h2>,
    placement: "center",
    target: "body",
  },
  {
    content: <h2>Listen to the statement as many times as you need to learn its pronunciation</h2>,
    placement: "bottom",
    target: "#play-statement",
    title: "Step 1: Play the Statement",
  },
  {
    content: <h2>Listen to the question to see if you can understand it without seeing it</h2>,
    placement: "bottom",
    target: "#play-question",
    title: "Step 2: Play the Question",
  },    {
    content: <h2>See the question if you do not understand it while listening</h2>,
    placement: "bottom",
    target: "#show-question",
    title: "Step 3: Reveal the Question",
  },
  {
    content: <h2>You have only 3-5 seconds to say only 1 or 2 word answers like "Si", "No" or "Jinete"</h2>,
    placement: "bottom",
    target: "#say-answer",
    title: "Step 4: Say the Answer",
  },
  {
    content: <h2>Listen to the correct answer to see if your answer is correct</h2>,
    placement: "bottom",
    target: "#play-answer",
    title: "Step 5: Play the Answer",
  },
  {
    content: <h2>See the answer if you do not understand it while listening</h2>,
    placement: "bottom",
    target: "#show-answer",
    title: "Step 6: Reveal the Answer",
  },
];