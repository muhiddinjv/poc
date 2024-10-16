import { v4 as uuid } from "uuid";
console.log(uuid());

export const TPRS_2_0 = {
  storyTitle: "El Problema del Chico",
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
          feedback: "Hay un chico.",
          point: 20,
        },
        {
          question: "¿Hay una chica?",
          answer: "No",
          feedback: "No hay un chica. Hay un chico.",
          point: 20,
        },
        {
          question: "¿Hay un gato?",
          answer: "No",
          feedback: "No hay un gato. Hay un chico.",
          point: 20,
        },
        {
          question: "¿Hay un elefante, hay un chico o hay un gato?",
          answer: "No",
          feedback: "Hay un chico.",
          point: 20,
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
          feedback: "El chico no es Henry. El chico es George.",
          point: 20,
        },
        {
          question: "¿El chico es George o Henry?",
          answer: "jinete",
          feedback: "El chico es George.",
          point: 20,
        },
        {
          question: "El chico es Billy?",
          answer: "sí",
          feedback: "El chico no es Billy. El chico es George.",
          point: 20,
        },
        {
          question: "Quién es el chico?",
          answer: "George",
          feedback: "George es el chico",
          point: 20,
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement:
        "Hay un chico. No hay un gato. No hay un mosquito. Hay un chico y el chico es George.",
      explanation:
        "Now, the way we do this is, you are George. I'm going to call on you and call you Judy George or Billy George. And then you're going to know that I'm calling on Judy, but you're going to always remember that you are George. As we go on, we'll have a few exceptions to this as we add other characters. But that's how we do it",
      retell: "",
      questions: [
        {
          question: "Tu eres un chico?",
          answer: "sí yo soy un chico",
          feedback: "Tu eres un chico",
          point: 20,
        },
        {
          question: "¿Tu eres un chico o tu eres un elefante?",
          answer: "yo soy un chico",
          feedback:
            "Tu eres un chico. Tu no eres un elefante. Tu eres un chico",
          point: 20,
        },
        {
          question: "¿Tu eres George o tu eres Billy?",
          answer: "yo soy George",
          feedback: "Tu no eres Billy. Tu eres George.",
          point: 20,
        },
        {
          question: "¿Tu eres Henry?",
          answer: "No. Yo soy George",
          feedback: "Tu eres George",
          point: 20,
        },
        {
          question: "¿Tu eres un chico o tu eres un búfalo?",
          answer: "Yo soy chico",
          feedback: "Tu eres un chico",
          point: 20,
        },
        {
          question: "¿Tu eres George o tu eres William?",
          answer: "Yo soy George",
          feedback: "Tu eres George",
          point: 20,
        },
        {
          question: "¿Quien eres?",
          answer: "Yo soy George",
          feedback: "Tu eres un chico. Y tu eres George",
          point: 20,
        },
        {
          question: "¿Tu eres un chico o tu eres un búfalo?",
          answer: "Yo soy un chico",
          feedback: "Tu eres un chico",
          point: 20,
        },
        {
          question: "¿Tu eres George o tu eres Marshall?",
          answer: "Yo soy George",
          feedback: "Tu eres George",
          point: 20,
        },
        {
          question: "¿Quien eres tu?",
          answer: "Yo soy un chico",
          feedback: "Tu eres George",
          point: 20,
        },
        {
          question: "¿Que eres tu?",
          answer: "Soy el chico",
          feedback: "Tu eres un chico. Y tu eres el chico.",
          point: 20,
        },
        {
          question: "¿Tu eres un búfalo o tu eres un chico?",
          answer: "No soy un búfalo. Soy un chico",
          feedback: "Tu no eres un búfalo. Tu eres un chico.",
          point: 20,
        },
        {
          question: "¿Tu eres un búfalo?",
          answer: "No soy un búfalo",
          feedback: "Tu no eres un búfalo. Tu eres un chico.",
          point: 20,
        },
        {
          question: "¿Tu eres George?",
          answer: "sí soy George",
          feedback: "Tu eres George.",
          point: 20,
        },
        {
          question: "¿Tu eres un mosquito?",
          answer: "No. Yo soy un chico",
          feedback: "Tu no eres un mosquito. Tu eres un chico.",
          point: 20,
        },
        {
          question: "¿Quien eres?",
          answer: "Yo soy George",
          feedback: "Tu eres George",
          point: 20,
        },
        {
          question: "¿Tu eres un búfalo?",
          answer: "Yo soy un chico",
          feedback: "Tu no eres un búfalo. Tu eres un chico.",
          point: 20,
        },
        {
          question: "¿Tu eres un mosquito o tu eres un chico?",
          answer: "Yo soy un chico",
          feedback: "Tu no eres un mosquito. Tu eres un chico.",
          point: 20,
        },
        {
          question: "¿Tu eres un elefante?",
          answer: "No soy un elefante. Yo soy un chico.",
          feedback: "Tu no eres un elefante. Tu eres un chico.",
          point: 20,
        },
        {
          question: "¿Tu eres un chico?",
          answer: "Yo soy un chico.",
          feedback: "Tu eres un chico",
          point: 20,
        },
        {
          question: "¿Tu eres un gato?",
          answer: "No. Yo soy un chico.",
          feedback: "Tu eres un chico",
          point: 20,
        },
        {
          question: "¿Quien es el chico?",
          answer: "Yo soy un chico.",
          feedback: "Tu eres un chico",
          point: 20,
        },
        {
          question: "¿Tu eres un gato?",
          answer: "No. Yo soy un chico.",
          feedback: "Tu no eres un gato. Tu eres un chico.",
          point: 20,
        },
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement:
        "Hay un chico. El chico es George. George es un chico normal. No es diferente. Yo soy Petey. Yo soy Petey la Pizza. I have to rename myself. Now you know who I am. Yo soy una pizza. Yo soy Petey. Yo soy una pizza. Yo soy una pizza interesante. Muy interesante.",
      explanation:
        "Now, la is the, so they have another way of saying la. Petey la pizza. Yo soy Petey la pizza. So with pizza, they say una pizza. With chico, they say un for a. So un and una are the same thing. It's just to use una with pizza and use un with chico.",
      retell: "",
      questions: [
        {
          question: "¿Soy una pizza normal?",
          answer: "no",
          feedback:
            "Ridiculo. No soy una pizza normal. Soy una pizza interesante. Tu no eres una pizza. Tu eres un chico. Tu eres un chico normal. Yo soy una pizza diferente.",
          point: 20,
        },
        {
          question:
            "Tu eres George. Yo soy Petey. Tu eres un chico. Yo soy una pizza. Es una situación interesante. ¿Quien es el chico?",
          answer: "Yo soy el chico",
          feedback: "Obvio. Tu eres el chico",
          point: 20,
        },
        {
          question: "¿Quien es la pizza?",
          answer: "Tu eres la pizza",
          feedback: "Yo soy la pizza. Y tu eres el chico",
          point: 20,
        },
        {
          question: "¿Tu eres un chico normal o diferente?",
          answer: "Soy un chico normal",
          feedback:
            "Obvio, correcto. Tu no eres diferente. Tu eres un chico normal.",
          point: 20,
        },
        {
          question: "¿Yo soy un pizza, una pizza normal?",
          answer: "No, tu eres una pizza diferente",
          feedback: "Yo no soy una pizza normal. Yo soy una pizza diferente.  ",
          point: 20,
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
          answer:
            "Yo soy el chico. Yo soy George. Tu eres una pizza. Tu eres Petey la pizza. Yo soy un chico normal. Tu eres una pizza diferente.",
          feedback:
            "Tu eres un chico. Tu no eres una pizza. Tu eres un chico normal. Yo soy una pizza. Yo soy pidi. Tu eres George. Tu eres un chico normal. Yo soy una pizza interesante. Y soy una pizza diferente. Es una situación muy interesante.",
          point: 20,
        },
        {
          question:
            "Tu eres un chico. Tu eres George. Muy interesante, pero tu eres normal. Yo soy Petey. Yo soy Petey la pizza. Yo soy una pizza muy interesante. Compara tu situacion con mi situacion.",
          answer:
            "Yo soy George. Yo soy un chico normal. Tu eres Petey. Tu eres pizza. Tu eres Petey la pizza. Tu eres pizza diferente.",
          feedback:
            "Yo soy Petey la pizza. Yo soy una pizza diferente. Yo soy pidi la pizza. Yo soy una pizza diferente. Tu eres un chico normal.",
          point: 20,
        },
        {
          question:
            "Tu eres George. Tu eres un chico. Yo Yo soy una pizza, yo soy Petey, Petey la pizza. Yo soy diferente, tu eres normal. Compara tu situacion con mi situacion.",
          answer:
            "Yo soy un chico, yo soy George, yo soy normal. Tu eres una pizza, tu eres normal. Muy interesante, tu eres diferente.",
          feedback: "No hay un jinete con cabeza. Hay un jinete sin cabeza.",
          point: 20,
        },
        {
          question:
            "Tu eres George, tu eres un chico, tu eres un chico normal. Yo no soy un chico, yo soy una pizza. Yo soy una pizza interesante. Tu eres un chico normal. Compara tu situacion con mi situacion.",
          answer: "Tu eres pizza diferente y interesante.",
          feedback: "Yo soy Petey y tu eres George. Muy interesante.",
          point: 20,
        },
        {
          question:
            "Tu eres George. Tu eres un chico. Yo soy una pizza. Yo soy Petey. Yo soy diferente y tu eres normal. Compara tu situacion con mi situacion.",
          answer:
            "Yo soy George, yo soy el chico. Yo soy chico normal. Tu eres Petey. Tu eres Petey la pizza. Tu eres interesante.",
          feedback:
            "Yo soy Petey. Soy Petey la pizza. Yo soy interesante. Tu eres normal. Tu eres un chico normal. Yo no soy normal, yo soy interesante.",
          point: 20,
        },
        {
          question:
            "Tu eres George. Tu eres un chico. Yo soy Petey, yo soy una pizza. Yo soy interesante. Tu no, tu eres normal. Yo soy interesante. Describe la situacion. Compare tu situacion con mi situacion.",
          answer:
            "Yo soy chico. Yo soy chico normal. Tu eres pizza y yo soy el chico.",
          feedback: "Celebracion, excelente, muy bien.",
          point: 20,
        },
        {
          question: "Describe la situacion",
          answer:
            "Yo soy George, yo soy un chico normal. Tu eres la pizza. Tu eres Petey la pizza y muy interesante.",
          feedback: "Celebracion, excelente, muy bien.",
          point: 20,
        },
        {
          question:
            "Yo soy interesante. Yo soy una pizza interesante. Tu eres George, tu no eres una pizza. Yo soy una pizza. Yo soy Petey. Describe la situacion. Compara mi situacion con tu situacion.",
          answer:
            "Yo soy un chico. Yo soy George. Tu eres Petey. Tu eres interesante. Tu eres pizza. Yo soy normal.",
          feedback: "Celebracion, excelente. Muy bien.",
          point: 20,
        },
        {
          //29:17 https://youtu.be/g-unlooHVqs?si=s1ZS1Wnw1w4Q2O8X
          question: "Miranda George, describe la situacion",
          answer:
            "Yo soy George, yo soy un chico normal. Tu eres la pizza. Tu eres Petey la pizza y muy interesante.",
          feedback: "Celebracion, excelente, muy bien.",
          point: 20,
        },
      ],
    },
  ],
};

export const storydataOriginal = {
  storyTitle: "The Headless Horseman's Problem",
  quizSynopsis: "",
  statements: [
    {
      image:
        "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg",
      statement: "There is a headless horseman.",
      questions: [
        {
          question: "Is there a headless horseman?",
          qtranslation: "Bormi bir boshli chavandoz?",
          answer: "yes",
          feedback: "There is a headless horseman.",
          explanation:
            "The question asks if there is a headless horseman, and the answer confirms it.",
          point: 20,
        },
        {
          question: "Is there a headless horseman or a president?",
          qtranslation: "Bormi bir boshli chavandoz yoki bir prezident?",
          answer: "headless horseman",
          feedback: "There is a headless horseman.",
          explanation:
            "The question asks if there is a headless horseman or a president. The answer confirms the presence of a headless horseman.",
          point: 20,
        },
        {
          question: "Is there a president?",
          qtranslation: "Bormi bir prezident?",
          answer: "no",
          feedback: "There is not a president. There is a headless horseman.",
          explanation:
            "The question asks if there is a president, and the answer negates it, confirming the presence of a headless horseman instead.",
          point: 20,
        },
        {
          question: "What is there?",
          qtranslation: "Nima bor?",
          answer: "There is a headless horseman.",
          feedback: "There is a headless horseman.",
          explanation:
            "The question asks what is present, and the answer confirms the presence of a headless horseman.",
          point: 20,
        },
      ],
    },

    {
      image: "https://picsum.photos/500",
      statement: "He has a problem.",
      questions: [
        {
          question: "Does he have a problem?",
          qtranslation: "Uning muammosi bormi?",
          answer: "yes",
          feedback: "He has a problem.",
          explanation:
            "The question asks if he has a problem, and the answer confirms that he does.",
          point: 20,
        },
        {
          question: "Does he have a problem or a solution?",
          qtranslation: "Uning muammosi yoki echimi bormi?",
          answer: "problem",
          feedback: "He has a problem.",
          explanation:
            "The question asks if he has a problem or a solution, and the answer confirms that he has a problem.",
          point: 20,
        },
        {
          question: "Does he have a solution?",
          qtranslation: "Uning echimi bormi?",
          answer: "no",
          feedback: "He does not have a solution. He has a problem.",
          explanation:
            "The question asks if he has a solution, and the answer confirms that he does not, but he has a problem.",
          point: 20,
        },
        {
          question: "What does he have?",
          qtranslation: "Uning nima bor?",
          answer: "He has a problem.",
          feedback: "He has a problem.",
          explanation:
            "The question asks what he has, and the answer confirms that he has a problem.",
          point: 20,
        },
      ],
    },
    {
      image: "https://picsum.photos/499",
      statement: "He goes to a doctor.",
      questions: [
        {
          question: "Does he go to a doctor?",
          qtranslation: "U shifokorga boradimi?",
          answer: "yes",
          feedback: "He goes to a doctor.",
          explanation:
            "The question asks if he goes to a doctor, and the answer confirms that he does.",
          point: 20,
        },
        {
          question: "Does he go to a doctor or a dentist?",
          qtranslation: "U shifokorga yoki tish shifokoriga boradimi?",
          answer: "doctor",
          feedback: "He goes to a doctor.",
          explanation:
            "The question asks if he goes to a doctor or a dentist, and the answer confirms that he goes to a doctor.",
          point: 20,
        },
        {
          question: "Does he go to a dentist?",
          qtranslation: "U tish shifokoriga boradimi?",
          answer: "no",
          feedback: "He does not go to a dentist. He goes to a doctor.",
          explanation:
            "The question asks if he goes to a dentist, and the answer confirms that he does not, but he goes to a doctor instead.",
          point: 20,
        },
        {
          question: "Where does he go?",
          qtranslation: "U qayerga boradi?",
          answer: "He goes to a doctor.",
          feedback: "He goes to a doctor.",
          explanation:
            "The question asks where he goes, and the answer confirms that he goes to a doctor.",
          point: 20,
        },
      ],
    },
    {
      image: "https://picsum.photos/498",
      statement: 'The doctor asks, "What\'s your problem?"',
      questions: [
        {
          question: 'Does the doctor ask, "What\'s your problem?"',
          qtranslation: 'Shifokor, "Sizning muammoingiz nima?" deb soraydimi?',
          answer: "yes",
          feedback: 'The doctor asks, "What\'s your problem?"',
          explanation:
            "The question asks if the doctor inquires about the patient's problem, and the answer confirms that he does.",
          point: 20,
        },
        {
          question:
            'Does the doctor ask, "What\'s your problem?" or "How are you?"',
          qtranslation:
            'Shifokor, "Sizning muammoingiz nima?" yoki "Qalaysiz?" deb soraydimi?',
          answer: '"What\'s your problem?"',
          feedback: 'The doctor asks, "What\'s your problem?"',
          explanation:
            "The question contrasts between two possible inquiries, and the answer confirms that the doctor asks about the problem.",
          point: 20,
        },
        {
          question: 'Does the doctor ask, "How are you?"',
          qtranslation: 'Shifokor, "Qalaysiz?" deb soraydimi?',
          answer: "no",
          feedback:
            'The doctor does not ask, "How are you?" The doctor asks, "What\'s your problem?"',
          explanation:
            "The question asks if the doctor inquires about general well-being, and the answer negates it, confirming that the doctor asks about the problem instead.",
          point: 20,
        },
        {
          question: "What does the doctor ask?",
          qtranslation: "Shifokor nima deb soraydi?",
          answer: 'The doctor asks, "What\'s your problem?"',
          feedback: 'The doctor asks, "What\'s your problem?"',
          explanation:
            "The question asks what the doctor inquires about, and the answer confirms that the doctor asks about the problem.",
          point: 20,
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
          qtranslation:
            'Boshli chavandoz, "Mening boshim og\'riyapti" deb aytadimi?',
          answer: "yes",
          feedback: 'The headless horseman says, "I have a headache."',
          explanation:
            "The question asks if the headless horseman mentions having a headache, and the answer confirms that he does.",
          point: 20,
        },
        {
          question:
            'Does the headless horseman say, "I have a headache" or "I have no head?"',
          qtranslation:
            'Boshli chavandoz, "Mening boshim og\'riyapti" yoki "Mening boshim yo\'q" deb aytadimi?',
          answer: '"I have a headache."',
          feedback: 'The headless horseman says, "I have a headache."',
          explanation:
            "The question contrasts two possible statements, and the answer confirms that the headless horseman mentions having a headache.",
          point: 20,
        },
        {
          question: 'Does the headless horseman say, "I have no head?"',
          qtranslation: 'Boshli chavandoz, "Mening boshim yo\'q" deb aytadimi?',
          answer: "no",
          feedback:
            'The headless horseman does not say, "I have no head." The headless horseman says, "I have a headache."',
          explanation:
            "The question asks if the headless horseman mentions not having a head, and the answer negates this, confirming that he says he has a headache instead.",
          point: 20,
        },
        {
          question: "What does the headless horseman say?",
          qtranslation: "Boshli chavandoz nima deydi?",
          answer: 'The headless horseman says, "I have a headache."',
          feedback: 'The headless horseman says, "I have a headache."',
          explanation:
            "The question asks what the headless horseman says, and the answer confirms that he mentions having a headache.",
          point: 20,
        },
      ],
    },
  ],
};

// PRDO data below
export const stories = [
  {
    id: 1,
    title: {
      en: "The Headless Horseman",
      es: "El Jinete Sin Cabeza",
      ar: "الفارس بلا رأس",
      ru: "Всадник без головы",
      uz: "Boshsiz chavandoz",
    },
    description: {
      en: "A funny story about a headless horseman",
      es: "Una historia graciosa sobre un jinete sin cabeza",
      ar: "قصة مضحكة عن فارس بلا رأس يعاني من صداع",
      ru: "Забавная история о безголовом всаднике",
      uz: "Boshsiz chavandoz haqida kulgili hikoya",
    },
    cefrLevel: 1,
    availableLanguages: ["en", "es", "ar", "ru", "uz"],
    img: "/img/headless_horseman.jpg",
    defaultLanguage: "en",
    order: 1,
  },
  {
    id: 2,
    title: {
      en: "Tyson's Barber",
      es: "El Barbero de Tyson",
      ar: "حلاق تايسون",
      ru: "Парикмахер Тайсона",
      uz: "Taysonning sartaroshi",
    },
    description: {
      en: "A funny story about Tyson's barber",
      es: "Una historia graciosa sobre el barbero de Tyson",
      ar: "قصة مضحكة عن فارس بلا رأس يعاني من صداع",
      ru: "Забавная история о парикмахер Тайсона",
      uz: "Taysonning sartaroshi haqida kulgili hikoya",
    },
    cefrLevel: 1,
    availableLanguages: ["en", "es", "ar", "ru", "uz"],
    img: "https://picsum.photos/499",
    defaultLanguage: "en",
    order: 1,
  },
];

export const lessons = [
  {
    id: 1,
    storyId: 1,
    title: {
      en: "There is, without",
      es: "Hay, sin",
    },
    description: "Introduction to the headless horseman",
    statementIds: [
      "8c126070-6cda-4b76-8ddc-dfee953a2dff", // "Hay un jinete"
      "3d3a5fe2-2308-4e35-aa7c-70a4916cb9ee", // "Hay un jinete sin cabeza"
    ],
    order: 1,
  },
  {
    id: 2,
    storyId: 1,
    title: {
      en: "He is, I am",
      es: "Es, yo soy",
    },
    description: "Learning about the horseman's fame",
    statementIds: [
      "540d7cfe-7351-4d79-9739-f51722b796f3", // "El jinete es famoso"
      "3ebda685-1915-4748-a1aa-259550e00e92", // "Yo soy el jinete"
    ],
    order: 2,
  },
  {
    id: 3,
    storyId: 1,
    title: {
      en: "He has, he goes to",
      es: "Tiene, Él va",
    },
    description: "The horseman faces a problem",
    statementIds: [
      "73d94834-3309-4114-bbd7-b1c9bac22e17", // "El jinete tiene un problema"
      "0b8e3531-300a-4fcb-8d59-549bdeb82a7b", // "Él va al doctor"
    ],
    order: 3,
  },
  {
    id: 4,
    storyId: 1,
    title: {
      en: "Says, Pain of",
      es: "Dice, Dolor de",
    },
    description: "The horseman visits the doctor",
    statementIds: [
      "f1a9f37d-e919-4046-a754-f5d17d8679cd", // "El doctor dice..."
      "6fe0021a-07cf-4439-ab45-9bbb56748068", // "El jinete sin cabeza dice..."
    ],
    order: 4,
  },
];

export const statements = [
  {
    id: "8c126070-6cda-4b76-8ddc-dfee953a2dff",
    storyId: 1,
    image: "/img/horseman.jpg",
    statement: { es: "Hay un jinete", en: "There is a horseman" },
    order: 1,
  },
  {
    id: "3d3a5fe2-2308-4e35-aa7c-70a4916cb9ee",
    storyId: 1,
    image: "/img/headless_horseman.jpg",
    statement: {
      es: "Hay un jinete sin cabeza",
      en: "There is a horseman without head",
    },
    order: 2,
  },
  {
    id: "540d7cfe-7351-4d79-9739-f51722b796f3",
    storyId: 1,
    image: "/img/headless_horseman.jpg",
    statement: { es: "El jinete es famoso", en: "The horseman is famous" },
    order: 3,
  },
  {
    id: "3ebda685-1915-4748-a1aa-259550e00e92",
    storyId: 1,
    image: "/img/headless_horseman_eseech.jpg",
    statement: { es: "Yo soy el jinete", en: "I am the horseman" },
    order: 4,
  },
  {
    id: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    storyId: 1,
    image: "/img/problem.jpg",
    statement: {
      es: "El jinete tiene un problema.",
      en: "The horseman has a problem.",
    },
    order: 5,
  },
  {
    id: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    storyId: 1,
    image: "/img/he_goes.jpg",
    statement: { es: "Él va al doctor.", en: "He goes to the doctor." },
    order: 6,
  },
  {
    id: "f1a9f37d-e919-4046-a754-f5d17d8679cd",
    storyId: 1,
    image: "/img/doctor.jpg",
    statement: {
      es: "El doctor dice: '¿Qué es tu problema?'",
      en: "The doctor says, 'Whats your problem?'",
    },
    order: 7,
  },
  {
    id: "6fe0021a-07cf-4439-ab45-9bbb56748068",
    storyId: 1,
    image: "/img/headache.jpg",
    statement: {
      es: "El jinete sin cabeza dice: 'Tengo un dolor de cabeza.'",
      en: "The headless horseman says, 'I have a headache.'",
    },
    order: 8,
  },
];

export const questions = [
  //Hay un jinete sin cabeza-------------------------------------
  {
    id: "d8ba9b39-b86a-4c92-a721-daafa0f304ee",
    statementId: "8c126070-6cda-4b76-8ddc-dfee953a2dff",
    question: {
      es: "Hay un jinete?",
      en: "Is there a horseman?",
      ar: "هل هناك فارس؟",
    },
    answer: {
      es: "sí",
      ar: "نعم",
    },
    image: "https://picsum.photos/500",
    feedback: {
      es: "Hay un jinete.",
      ar: "هناك فارس.",
    },
    explanation: {
      en: "This is the question and 'Hay' means 'There is'",
    },
    point: 20,
  },
  {
    id: "0ceedc61-fd58-4cd5-a8f1-d5763252e30b",
    statementId: "8c126070-6cda-4b76-8ddc-dfee953a2dff",
    question: {
      es: "¿Hay un chico?",
      en: "Is there a boy?",
      ar: "هل هناك صبي؟",
    },
    answer: {
      es: "No",
      ar: "لا",
    },
    image: "https://picsum.photos/499",
    feedback: {
      es: "No hay un chico. Hay un jinete.",
      ar: "لا يوجد صبي. هناك فارس.",
    },
    explanation: {
      en: "'Un' is the word 'a' in English",
    },
    point: 20,
  },
  {
    id: "74e3ae48-9e2b-496a-9058-ec4faba32eca",
    statementId: "8c126070-6cda-4b76-8ddc-dfee953a2dff",
    question: {
      es: "¿Hay una chica?",
      en: "Is there a girl?",
      ar: "هل هناك فتاة؟",
    },
    answer: {
      es: "No",
      ar: "لا",
    },
    image: "https://picsum.photos/498",
    feedback: {
      es: "No hay una chica. Hay un jinete.",
      ar: "لا توجد فتاة. هناك فارس.",
    },
    explanation: {
      en: "'Una' too is the word 'a'",
    },
    point: 20,
  },
  {
    id: "635d84d2-6378-45d9-8f07-110dd460e702",
    statementId: "8c126070-6cda-4b76-8ddc-dfee953a2dff",
    question: {
      es: "¿Hay una chica o un jinete?",
      en: "Is there a girl or a horseman?",
      ar: "هل هناك فتاة أو فارس؟",
    },
    answer: {
      es: "jinete",
      ar: "فارس",
    },
    image: "https://picsum.photos/497",
    feedback: {
      es: "Hay un jinete.",
      ar: "هناك فارس.",
    },
    explanation: {
      en: "'O' means 'or'",
    },
    point: 20,
  },
  {
    id: "dc2e1d10-78c8-4543-86b0-ace4fff48172",
    statementId: "8c126070-6cda-4b76-8ddc-dfee953a2dff",
    question: {
      es: "Hay un presidente?",
      en: "Is there a president?",
      ar: "هل هناك رئيس؟",
    },
    answer: {
      es: "no",
      ar: "لا",
    },
    image: "https://picsum.photos/496",
    feedback: {
      es: "No hay un presidente. Hay un jinete.",
      ar: "لا يوجد رئيس. هناك فارس.",
    },
    explanation: {
      en: "'Presidente' means 'president'",
    },
    point: 20,
  },
  //Hay un jinete sin cabeza-------------------------------------
  {
    id: "93fcafaa-8610-4966-8cdb-c09b8a170b64",
    statementId: "3d3a5fe2-2308-4e35-aa7c-70a4916cb9ee",
    question: {
      es: "Hay un jinete sin cabeza?",
      en: "Is there a horseman without a head?",
      ar: "هل هناك فارس بلا رأس؟",
    },
    image: "https://picsum.photos/495",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Hay un jinete sin cabeza.",
      ar: "هناك فارس بلا رأس.",
    },
    explanation: {
      en: "'sin' means 'without' in English",
    },
    point: 20,
  },
  {
    id: "10a8df53-b409-4d5e-a434-c1ef774952d6",
    statementId: "3d3a5fe2-2308-4e35-aa7c-70a4916cb9ee",
    question: {
      es: "¿Hay un jinete sin cabeza o con cabeza?",
      en: "Is there a horseman without a head or with a head?",
      ar: "هل هناك فارس بلا رأس أم برأس؟",
    },
    image: "https://picsum.photos/495",
    answer: {
      es: "sin cabeza",
      ar: "بلا رأس",
    },
    feedback: {
      es: "Hay un jinete sin cabeza.",
      ar: "هناك فارس بلا رأس.",
    },
    explanation: {
      en: "'con' means 'with' in English",
    },
    point: 20,
  },
  {
    id: "7a7e34ca-c14f-4c99-baf3-c2c547e984f6",
    statementId: "3d3a5fe2-2308-4e35-aa7c-70a4916cb9ee",
    question: {
      es: "¿Hay un jinete con cabeza?",
      en: "Is there a horseman with a head?",
      ar: "هل هناك فارس برأس؟",
    },
    image: "https://picsum.photos/493",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No hay un jinete con cabeza. Hay un jinete sin cabeza.",
      ar: "لا يوجد فارس برأس. هناك فارس بلا رأس.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "67b58138-3a6a-433a-804f-3a7c51f9a6e6",
    statementId: "3d3a5fe2-2308-4e35-aa7c-70a4916cb9ee",
    question: {
      es: "¿Qué hay?",
      en: "What is there?",
      ar: "ماذا يوجد؟",
    },
    image: "https://picsum.photos/492",
    answer: {
      es: "jinete",
      ar: "فارس",
    },
    feedback: {
      es: "Hay un jinete sin cabeza.",
      ar: "هناك فارس بلا رأس.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  //El jinete es famoso-------------------------------------
  {
    id: "5b0873d3-b6b9-419b-943a-54d7fb84a7ee",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es el jinete famoso?",
      en: "Is the horseman famous?",
      ar: "هل الفارس مشهور؟",
    },
    image: "https://picsum.photos/491",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "El jinete es famoso.",
      ar: "الفارس مشهور.",
    },
    explanation: {
      en: "'Es' means 'is' in English",
    },
    point: 20,
  },
  {
    id: "0d745cb1-4115-436e-8d67-dec2956ee439",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es él famoso o terrible?",
      en: "Is he famous or terrible?",
      ar: "هل هو مشهور أم رهيب؟",
    },
    image: "https://picsum.photos/490",
    answer: {
      es: "famoso",
      ar: "مشهور",
    },
    feedback: {
      es: "Él es famoso",
      ar: "هو مشهور",
    },
    explanation: {
      en: "'Él es' literally means 'He he is' so you can simply say 'Es'",
    },
    point: 20,
  },
  {
    id: "429e32dd-035d-4454-9e35-50767f27c650",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es él terrible?",
      en: "Is he terrible?",
      ar: "هل هو رهيب؟",
    },
    image: "https://picsum.photos/489",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "Él no es terrible. Es famoso.",
      ar: "هو ليس رهيباً. هو مشهور.",
    },
    explanation: {
      en: "'no es' means 'is not' in English",
    },
    point: 20,
  },
  {
    id: "d3545296-56c9-4434-a6b2-b6b21808b4b0",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es Enrique Iglesias famoso?",
      en: "Is Enrique Iglesias famous?",
      ar: "هل إنريكي إغليسياس مشهور؟",
    },
    image: "https://picsum.photos/488",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Él es famoso.",
      ar: "هو مشهور.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "ae1bca8c-7908-43c9-9e29-7bed950c85c1",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es él un jinete?",
      en: "Is he a horseman?",
      ar: "هل هو فارس؟",
    },
    image: "https://picsum.photos/487",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "Es ridiculo! No es un jinete.",
      ar: "هذا سخيف! هو ليس فارساً.",
    },
    explanation: {
      en: "'No es' means '(he) is not' in English",
    },
    point: 20,
  },
  {
    id: "1523d977-2c81-484f-a7e6-eaa324a2ee49",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es el jinete Enrique?",
      en: "Is the horseman Enrique?",
      ar: "هل الفارس هو إنريكي؟",
    },
    image: "https://picsum.photos/486",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "Es ridiculo! El jinete no es Enrique.",
      ar: "هذا سخيف! الفارس ليس إنريكي.",
    },
    explanation: {
      en: "'No es' means '(he) is not' in English",
    },
    point: 20,
  },
  {
    id: "1de0e6b4-56c6-49b3-b10f-13bece36ef06",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es Enrique terrible?",
      en: "Is Enrique terrible?",
      ar: "هل إنريكي رهيب؟",
    },
    image: "https://picsum.photos/485",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No es terrible. Es famoso.",
      ar: "إنريكي ليس رهيباً. هو مشهور.",
    },
    explanation: {
      en: "'No es' means '(he) is not' in English",
    },
    point: 20,
  },
  {
    id: "8cd3b5fa-8ed7-4090-9baf-53e8c371ee36",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es él famoso o terrible?",
      en: "Is he famous or terrible?",
      ar: "هل هو مشهور أم رهيب؟",
    },
    image: "https://picsum.photos/484",
    answer: {
      es: "famoso",
      ar: "مشهور",
    },
    feedback: {
      es: "Es famoso",
      ar: "هو مشهور",
    },
    explanation: {
      en: "'famoso' means 'famous' in English",
    },
    point: 20,
  },
  {
    id: "c72645e4-f2df-46a7-b300-e82a04c50fe1",
    statementId: "540d7cfe-7351-4d79-9739-f51722b796f3",
    question: {
      es: "¿Es el jinete famoso?",
      en: "Is the horseman famous?",
      ar: "هل الفارس مشهور؟",
    },
    image: "https://picsum.photos/483",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "El jinete es famoso.",
      ar: "الفارس مشهور.",
    },
    explanation: {
      en: "'Es' means 'is' in English",
    },
    point: 20,
  },
  // yo soy el jinete ------------------------------------
  {
    id: "df15112f-a3e1-4667-987e-3dd60d93b918",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy el jinete?",
      en: "Am I the horseman?",
      ar: "هل أنا الفارس؟",
    },
    image: "https://picsum.photos/482",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Soy el jinete",
      ar: "أنا الفارس",
    },
    explanation: {
      en: "'yo soy' means 'I I am' so you can leave out 'yo'",
    },
    point: 20,
  },
  {
    id: "ba914a17-d05e-4683-8b3c-c3e5bcc53859",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy el jinete o un presidente?",
      en: "Am I the horseman or a president?",
      ar: "هل أنا الفارس أم رئيس؟",
    },
    image: "https://picsum.photos/481",
    answer: {
      es: "jinete",
      ar: "فارس",
    },
    feedback: {
      es: "Soy el jinete",
      ar: "أنا الفارس",
    },
    explanation: {
      en: "'un presidente' means 'a president' in English",
    },
    point: 20,
  },
  {
    id: "c1d48928-ea08-4f69-9b4d-931f8b86ca54",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy famoso?",
      en: "Am I famous?",
      ar: "هل أنا مشهور؟",
    },
    image: "https://picsum.photos/480",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Soy famoso",
      ar: "أنا مشهور",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "92e8f19e-988a-4fc6-81c2-7391f112e201",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy terrible o famoso?",
      en: "Am I terrible or famous?",
      ar: "هل أنا فظيع أم مشهور؟",
    },
    image: "https://picsum.photos/479",
    answer: {
      es: "famoso",
      ar: "مشهور",
    },
    feedback: {
      es: "Soy famoso",
      ar: "أنا مشهور",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "60c1ce84-be6d-414f-99ea-6d9ba2fd4910",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy terrible?",
      en: "Am I terrible?",
      ar: "هل أنا فظيع؟",
    },
    image: "https://picsum.photos/478",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No soy terrible. Soy famoso",
      ar: "أنا لست فظيعاً. أنا مشهور",
    },
    explanation: {
      en: "'no soy' literally means 'not I am'",
    },
    point: 20,
  },
  {
    id: "12de42c6-7fe3-406d-b39a-4f8627774d7c",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy un presidente?",
      en: "Am I a president?",
      ar: "هل أنا رئيس؟",
    },
    image: "https://picsum.photos/477",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No soy un presidente. Soy el jinete",
      ar: "أنا لست رئيساً. أنا الفارس",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "a8d26003-b064-4a5f-b0ac-fa5cbf7dd0e0",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy el jinete?",
      en: "Am I the horseman?",
      ar: "هل أنا الفارس؟",
    },
    image: "https://picsum.photos/476",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Soy el jinete",
      ar: "أنا الفارس",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "496f6486-dbd6-47fa-aaa8-b339dcacf0c5",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy el jinete con cabeza?",
      en: "Am I the horseman with a head?",
      ar: "هل أنا الفارس برأس؟",
    },
    image: "https://picsum.photos/475",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No soy el jinete con cabeza. Soy el jinete sin cabeza.",
      ar: "أنا لست الفارس برأس. أنا الفارس بدون رأس",
    },
    explanation: {
      en: "'con' means 'with' but 'sin' means 'without'",
    },
    point: 20,
  },
  {
    id: "af3c764b-2b4a-4463-895d-72da33bdef98",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Soy el jinete sin cabeza?",
      en: "Am I the horseman without a head?",
      ar: "هل أنا الفارس بدون رأس؟",
    },
    image: "https://picsum.photos/474",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Soy el jinete sin cabeza.",
      ar: "أنا الفارس بدون رأس",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "b4c8f3f6-05c6-49eb-9a11-51c0b7f5ad44",
    statementId: "3ebda685-1915-4748-a1aa-259550e00e92",
    question: {
      es: "¿Qué soy?",
      en: "What am I?",
      ar: "ماذا أنا؟",
    },
    image: "https://picsum.photos/473",
    answer: {
      es: "jinete",
      ar: "فارس",
    },
    feedback: {
      es: "Soy el jinete",
      ar: "أنا الفارس",
    },
    explanation: {
      en: "'¿Qué' means 'what' in English",
    },
    point: 20,
  },

  // El jinete tiene un problema------------------------------------
  {
    id: "940f75a4-cd65-4997-bd26-5d848ba33bce",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿El jinete tiene un problema?",
      en: "Does the horseman have a problem?",
      ar: "هل لدى الفارس مشكلة؟",
    },
    image: "https://picsum.photos/472",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Él tiene un problema",
      ar: "لديه مشكلة",
    },
    explanation: {
      en: "'Él tiene' means 'he has' in English so you can simply say 'tiene'",
    },
    point: 20,
  },
  {
    id: "2899fa58-d432-4417-bf3b-ec726f6bcb32",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Él tiene un solución?",
      en: "Does he have a solution?",
      ar: "هل لديه حل؟",
    },
    image: "https://picsum.photos/471",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No él tiene una solución. Tiene un problema",
      ar: "ليس لديه حل. لديه مشكلة",
    },
    explanation: {
      en: "'Tiene' means 'he has' in English",
    },
    point: 20,
  },
  {
    id: "90ff90cc-b20e-4ef1-9cce-0e6ddfa60756",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Tiene un problema o tiene una solución?",
      en: "Does he have a problem or does he have a solution?",
      ar: "هل لديه مشكلة أم لديه حل؟",
    },
    image: "https://picsum.photos/470",
    answer: {
      es: "problema",
      ar: "مشكلة",
    },
    feedback: {
      es: "No tiene una solución. Tiene un problema",
      ar: "ليس لديه حل. لديه مشكلة",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "1b66c8a5-7edc-4e19-a84d-94f486622012",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Enrique tiene un problema?",
      en: "Does Enrique have problem?",
      ar: "هل لدى إنريكي مشكلة؟",
    },
    image: "https://picsum.photos/469",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No tiene un problema",
      ar: "ليس لديه مشكلة",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "88d998d2-3310-4936-8d5b-39047b1a6bfe",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Tiene un micrófono?",
      en: "Does he have a microphone?",
      ar: "هل لديه ميكروفون؟",
    },
    image: "https://picsum.photos/468",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Tiene un micrófono",
      ar: "لديه ميكروفون",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "58fdca72-886a-4ec9-9ff1-04ac63b4dcb5",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Tiene un problema?",
      en: "Does he have a problema?",
      ar: "هل لديه مشكلة؟",
    },
    image: "https://picsum.photos/467",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No tiene un problema. Tiene un micrófono.",
      ar: "ليس لديه مشكلة. لديه ميكروفون.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "11b785db-d2ff-432c-b6f3-a6756d7190bb",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Tiene un problema o tiene un micrófono?",
      en: "Does he have a problema or does he have a microphone?",
      ar: "هل لديه مشكلة أم لديه ميكروفون؟",
    },
    image: "https://picsum.photos/466",
    answer: {
      es: "micrófono",
      ar: "ميكروفون",
    },
    feedback: {
      es: "Tiene un micrófono.",
      ar: "لديه ميكروفون.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "dd2c1245-fb08-4b78-a9bc-90bc56fe9d7f",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Qué tiene?",
      en: "What does he have?",
      ar: "ماذا لديه؟",
    },
    image: "https://picsum.photos/465",
    answer: {
      es: "micrófono",
      ar: "ميكروفون",
    },
    feedback: {
      es: "Tiene un micrófono.",
      ar: "لديه ميكروفون.",
    },
    explanation: {
      en: "'Qué' means 'what' in English",
    },
    point: 20,
  },
  {
    id: "2c57f603-37c5-49a4-aa92-13875f2a49f5",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Quién tiene un problema?",
      en: "Who has a problem?",
      ar: "من لديه مشكلة؟",
    },
    image: "https://picsum.photos/464",
    answer: {
      es: "jinete",
      ar: "الفارس",
    },
    feedback: {
      es: "El jinete tiene un problema",
      ar: "الفارس لديه مشكلة",
    },
    explanation: {
      en: "'Quién' means 'who' in English",
    },
    point: 20,
  },
  {
    id: "c40039bb-db57-427e-96d5-6ba8e7a0b167",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Quién no tiene un problema?",
      en: "Who doesn't have a problem?",
      ar: "من ليس لديه مشكلة؟",
    },
    image: "https://picsum.photos/463",
    answer: {
      es: "Enrique",
      ar: "إنريكي",
    },
    feedback: {
      es: "Enrique no tiene un problema",
      ar: "إنريكي ليس لديه مشكلة",
    },
    explanation: {
      en: "'No tiene' means 'doesnt have' in English",
    },
    point: 20,
  },
  {
    id: "d9d587e9-55fe-4517-85b2-a4e0a5e2c32f",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Quién no tiene un micrófono?",
      en: "Who doesn't have a microphone?",
      ar: "من ليس لديه ميكروفون؟",
    },
    image: "https://picsum.photos/462",
    answer: {
      es: "jinete",
      ar: "الفارس",
    },
    feedback: {
      es: "El jinete no tiene un micrófono",
      ar: "الفارس ليس لديه ميكروفون",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "64715dff-d19a-44e3-b27c-d8077dbf1d41",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Quién no tiene un problema o no tiene un micrófono?",
      en: "Who doesn't have a problem or doesn't have a microphone?",
      ar: "من ليس لديه مشكلة أو ليس لديه ميكروفون؟",
    },
    image: "https://picsum.photos/461",
    answer: {
      es: "jinete",
      ar: "الفارس",
    },
    feedback: {
      es: "El jinete no tiene un micrófono",
      ar: "الفارس ليس لديه ميكروفون",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "64715dff-d19a-44e3-b27c-d8077dbf1d41",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Qué tiene el jinete?",
      en: "What does the horseman have?",
      ar: "ماذا لدى الفارس؟",
    },
    image: "https://picsum.photos/461",
    answer: {
      es: "problema",
      ar: "مشكلة",
    },
    feedback: {
      es: "Tiene un problema",
      ar: "لديه مشكلة",
    },
    explanation: {
      en: "'Qué tiene' means 'what does (he) have' in English",
      ar: "'ماذا لديه' تعني 'ماذا لديه' باللغة الإنجليزية",
    },
    point: 20,
  },
  {
    id: "13a3b249-2351-41b8-a646-37c3ef19f427",
    statementId: "73d94834-3309-4114-bbd7-b1c9bac22e17",
    question: {
      es: "¿Qué tiene Enrique?",
      en: "What does Enrique have?",
      ar: "ماذا لدى إنريكي؟",
    },
    image: "https://picsum.photos/460",
    answer: {
      es: "micrófono",
      ar: "ميكروفون",
    },
    feedback: {
      es: "Tiene un micrófono",
      ar: "لديه ميكروفون",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  // Va al doctor ------------------------------------------
  {
    id: "28604354-94f0-475e-9faf-c704108250e1",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Él va al doctor?",
      en: "Does he go to the doctor?",
      ar: "هل يذهب إلى الطبيب؟",
    },
    image: "https://picsum.photos/459",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Va al doctor",
      ar: "يذهب إلى الطبيب",
    },
    explanation: {
      en: "'Él va' literally means 'he goes' in English so you can leave out the 'Él' if you want",
      ar: "'Él va' تعني حرفياً 'هو يذهب' لذلك يمكنك حذف 'Él' إذا أردت",
    },
    point: 20,
  },
  {
    id: "41048d12-b9d5-46eb-87a3-ec6fb836962d",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Él va al doctor o al presidente?",
      en: "Does he go to the doctor or the president?",
      ar: "هل يذهب إلى الطبيب أم الرئيس؟",
    },
    image: "https://picsum.photos/458",
    answer: {
      es: "doctor",
      ar: "طبيب",
    },
    feedback: {
      es: "Va al doctor",
      ar: "يذهب إلى الطبيب",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  {
    id: "2737bf73-f202-4bbb-9d6a-e13e05bd5cfe",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Él va al presidente?",
      en: "Does he go to the president?",
      ar: "هل يذهب إلى الرئيس؟",
    },
    image: "https://picsum.photos/457",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No va al presidente. Va al doctor",
      ar: "لا يذهب إلى الرئيس. يذهب إلى الطبيب",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  {
    id: "7fa6a59b-eff2-49ea-9922-2122d7bcb19f",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Va Enrique a un concierto?",
      en: "Does Enrique go to a concert?",
      ar: "هل يذهب إنريكي إلى حفلة موسيقية؟",
    },
    image: "https://picsum.photos/456",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Va a un concierto.",
      ar: "يذهب إلى حفلة موسيقية.",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  {
    id: "954917ef-a920-4d97-8815-a4bb4390c31c",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Va el jinete a un concierto?",
      en: "Does the horseman go to a concert?",
      ar: "هل يذهب الفارس إلى حفلة موسيقية؟",
    },
    image: "https://picsum.photos/455",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No va a un concierto. Va al doctor.",
      ar: "لا يذهب إلى حفلة موسيقية. يذهب إلى الطبيب.",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  {
    id: "9bde76e3-c428-4b75-aecc-32c111e5f6fc",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Él va al doctor?",
      en: "Does he go to the doctor?",
      ar: "هل يذهب إلى الطبيب؟",
    },
    image: "https://picsum.photos/454",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Va al doctor.",
      ar: "يذهب إلى الطبيب.",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  {
    id: "7bd01ff3-42ff-47ec-b200-30473fe79624",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Él va al presidente?",
      en: "Does he go to the president?",
      ar: "هل يذهب إلى الرئيس؟",
    },
    image: "https://picsum.photos/453",
    answer: {
      es: "no",
      ar: "لا",
    },
    feedback: {
      es: "No va al presidente. Va al doctor",
      ar: "لا يذهب إلى الرئيس. يذهب إلى الطبيب",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  {
    id: "6b8e0a85-dab6-454e-b3c7-0c71d1889bad",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Va Enrique a un concierto?",
      en: "Does Enrique go to a concert?",
      ar: "هل يذهب إنريكي إلى حفلة موسيقية؟",
    },
    image: "https://picsum.photos/452",
    answer: {
      es: "sí",
      ar: "نعم",
    },
    feedback: {
      es: "Va a un concierto.",
      ar: "يذهب إلى حفلة موسيقية.",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  {
    id: "018ddf5f-0742-4ded-a8b1-8d3a085af513",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Él va a un concierto o al doctor?",
      en: "Does he go to a concert or the doctor?",
      ar: "هل يذهب إلى حفلة موسيقية أم إلى الطبيب؟",
    },
    image: "https://picsum.photos/451",
    answer: {
      es: "concierto",
      ar: "حفلة موسيقية",
    },
    feedback: {
      es: "Va a un concierto.",
      ar: "يذهب إلى حفلة موسيقية.",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },
  {
    id: "bf1784f5-f293-47a2-ac8c-8da8a3772c11",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Va Enrique al doctor o va el jinete al doctor?",
      en: "Does Enrique go to the doctor or does the horseman go to the doctor?",
      ar: "هل يذهب إنريكي إلى الطبيب أم الفارس؟",
    },
    image: "https://picsum.photos/450",
    answer: {
      es: "jinete",
      ar: "الفارس",
    },
    feedback: {
      es: "El jinete va al doctor.",
      ar: "الفارس يذهب إلى الطبيب.",
    },
    explanation: {
      en: "",
      ar: "",
    },
    point: 20,
  },

  //LEFT OFF HERE----------------------------------------------------------------------------------
  {
    id: "a9887e63-be15-468c-b9a0-239f4e75245f",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Va el jinete al doctor o a un concierto?",
      en: "Does the horseman go to the doctor or does he go to a concert?",
    },
    image: "https://picsum.photos/449",
    answer: {
      es: "doctor",
    },
    feedback: {
      es: "El jinete va al doctor.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "a8e5f8cf-2de8-4983-9f4b-5135040754cc",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Quién va al doctor?",
      en: "Who goes to the doctor?",
    },
    image: "https://picsum.photos/448",
    answer: {
      es: "jinete",
    },
    feedback: {
      es: "El jinete va al doctor.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "6de1018a-536c-467b-ba20-b3d455c14232",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿Quién va a un concierto?",
      en: "Who goes to a concert?",
    },
    image: "https://picsum.photos/447",
    answer: {
      es: "Enrique",
    },
    feedback: {
      es: "Enrique va a un concierto.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "8d9ed5b0-42e5-4f7b-aa50-a1df01ccfe44",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿A dónde va el jinete?",
      en: "Where does the horseman go?",
    },
    image: "https://picsum.photos/446",
    answer: {
      es: "doctor",
    },
    feedback: {
      es: "Va al doctor.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "a9c24863-3caa-47b7-9be3-00e9915613c2",
    statementId: "0b8e3531-300a-4fcb-8d59-549bdeb82a7b",
    question: {
      es: "¿A dónde va Enrique?",
      en: "Where does Enrique go?",
    },
    image: "https://picsum.photos/445",
    answer: {
      es: "concierto",
    },
    feedback: {
      es: "Va a un concierto.",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  //El doctor dice: '¿Qué es tu problema?'-------------
  {
    id: "1cc00fea-6bc9-40fb-b2c7-97f0ba94af38",
    statementId: "f1a9f37d-e919-4046-a754-f5d17d8679cd",
    question: {
      es: "¿Dice el doctor: '¿Qué es tu problema?'",
      en: "Does the doctor say, 'whats your problem'?",
    },
    image: "https://picsum.photos/444",
    answer: {
      es: "sí",
    },
    feedback: {
      es: "El doctor dice: '¿Qué es tu problema?'",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "1ca240da-34cc-4a9f-b061-6c1ff12ab13a",
    statementId: "f1a9f37d-e919-4046-a754-f5d17d8679cd",
    question: {
      es: "¿Dice el doctor: '¿Qué es tu solución?'",
      en: "Does the doctor say, 'whats your solution'?",
    },
    image: "https://picsum.photos/443",
    answer: {
      es: "no",
    },
    feedback: {
      es: "El doctor no dice: '¿Qué es tu solución?'. El doctor dice: '¿Qué es tu problema?'",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "ce198912-5a26-4da1-82e5-0907cfc8264c",
    statementId: "f1a9f37d-e919-4046-a754-f5d17d8679cd",
    question: {
      es: "¿Dice el doctor: '¿Qué es tu solución?' o '¿Qué es tu problema?'",
      en: "Does the doctor say, 'whats your solution' or 'whats your problem'?",
    },
    image: "https://picsum.photos/442",
    answer: {
      es: "qué es tu problema",
    },
    feedback: {
      es: "El doctor dice: '¿Qué es tu problema?'",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "4e356bc5-b87b-430c-bfcd-465125ce0082",
    statementId: "f1a9f37d-e919-4046-a754-f5d17d8679cd",
    question: {
      es: "¿Dice Enrique: '¿Qué es tu problema?'",
      en: "Does Enrique say, 'whats your solution'?",
    },
    image: "https://picsum.photos/441",
    answer: {
      es: "no",
    },
    feedback: {
      es: "Enrique no dice: '¿Qué es tu problema?'. El doctor dice: '¿Qué es tu problema?'",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "f0ef30bf-ebce-4ed2-91da-18f55d7f206e",
    statementId: "f1a9f37d-e919-4046-a754-f5d17d8679cd",
    question: {
      es: "¿Dice el jinete: '¿Qué es tu problema?'",
      en: "Does the horseman say, 'whats your problema'?",
    },
    image: "https://picsum.photos/440",
    answer: {
      es: "no",
    },
    feedback: {
      es: "El jinete no dice: '¿Qué es tu problema?'. El doctor dice: '¿Qué es tu problema?'",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "4b34908a-6397-4685-8f7c-0b2ca6d558a3",
    statementId: "f1a9f37d-e919-4046-a754-f5d17d8679cd",
    question: {
      es: "¿Quén dice: '¿Qué es tu problema?'",
      en: "Who says, 'whats your problem'?",
    },
    image: "https://picsum.photos/439",
    answer: {
      es: "doctor",
    },
    feedback: {
      es: "El doctor dice: '¿Qué es tu problema?'",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  //El jinete sin cabeza dice: 'Tengo un dolor de cabeza.'-------------
  {
    id: "dc446dcc-a674-4974-9b9c-25525a528d68",
    statementId: "6fe0021a-07cf-4439-ab45-9bbb56748068",
    question: {
      es: "¿Dice el jinete sin cabeza: 'Tengo un dolor de cabeza.'?",
      en: "Does the horseman without head say, 'I have a headache'?",
    },
    image: "https://picsum.photos/438",
    answer: {
      es: "sí",
    },
    feedback: {
      es: "El doctor dice: '¿Qué es tu problema?'",
    },
    explanation: {
      en: "Dolor = pain, de = of",
    },
    point: 20,
  },
  {
    id: "ab448d81-34ff-4f19-820b-0d77ffd17e02",
    statementId: "6fe0021a-07cf-4439-ab45-9bbb56748068",
    question: {
      es: "¿Dice Enrique: 'Tengo un dolor de cabeza.'?",
      en: "Does Enrique say, 'I have a headache'?",
    },
    image: "https://picsum.photos/437",
    answer: {
      es: "no",
    },
    feedback: {
      es: "Enrique no dice: 'Tengo un dolor de cabeza.'. El jinete dice: 'Tengo un dolor de cabeza.'",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "4589bce4-11ed-4306-9b7f-5cb1359e2843",
    statementId: "6fe0021a-07cf-4439-ab45-9bbb56748068",
    question: {
      es: "¿Dice Enrique o el jinete sin cabeza: 'Tengo un dolor de cabeza.'?",
      en: "Does Enrique say, 'I have a headache'?",
    },
    image: "https://picsum.photos/436",
    answer: {
      es: "jinete",
    },
    feedback: {
      es: "Enrique no dice: 'Tengo un dolor de cabeza.'. El jinete dice: 'Tengo un dolor de cabeza.'",
    },
    explanation: {
      en: "",
    },
    point: 20,
  },
  {
    id: "940f75a4-cd65-4997-bd26-5d848ba33bce",
    statementId: "6fe0021a-07cf-4439-ab45-9bbb56748068",
    question: {
      es: "¿Enrique tiene un dolor de cabeza?",
      en: "Does Enrique have a headache?",
    },
    image: "https://picsum.photos/435",
    answer: {
      es: "no",
    },
    feedback: {
      es: "Enrique no tiene un dolor de cabeza. El jinete tiene un dolor de cabeza.",
    },
    explanation: {
      en: "Dolor = pain, de = of",
    },
    point: 20,
  },
  {
    id: "d4ce8761-1fff-4261-b196-a818544aa426",
    statementId: "6fe0021a-07cf-4439-ab45-9bbb56748068",
    question: {
      es: "¿Enrique tiene un dolor de cabeza?",
      en: "Does Enrique have a headache?",
    },
    image: "https://picsum.photos/434",
    answer: {
      es: "no",
    },
    feedback: {
      es: "Enrique no tiene un dolor de cabeza. El jinete tiene un dolor de cabeza.",
    },
    explanation: {
      en: "Dolor = pain, de = of",
    },
    point: 20,
  },
  {
    id: "d4ce8761-1fff-4261-b196-a818544aa426",
    statementId: "6fe0021a-07cf-4439-ab45-9bbb56748068",
    question: {
      es: "¿Quién tiene un dolor de cabeza?",
      en: "Who has a headache?",
    },
    image: "https://picsum.photos/433",
    answer: {
      es: "jinete",
    },
    feedback: {
      es: "El jinete sin cabeza tiene un dolor de cabeza.",
    },
    explanation: {
      en: "Dolor = pain, de = of",
    },
    point: 20,
  },
];

// steps and words
export const steps1 = [
  {
    content: <h2 className="text-xl">Let's answer some questions!</h2>,
    placement: "center",
    target: "body",
  },
  {
    content: (
      <h2>
        Listen to the statement as many times as you need to learn its
        pronunciation
      </h2>
    ),
    placement: "bottom",
    target: "#play-statement",
    title: "Step 1: Play the Statement",
  },
  {
    content: (
      <h2>
        Listen to the question to see if you can understand it without seeing it
      </h2>
    ),
    placement: "bottom",
    target: "#play-question",
    title: "Step 2: Play the Question",
  },
  {
    content: (
      <h2>See the question if you do not understand it while listening</h2>
    ),
    placement: "bottom",
    target: "#show-question",
    title: "Step 3: Reveal the Question",
  },
  {
    content: (
      <h2>
        You have only 3-5 seconds to say only 1 or 2 word answers like "Si",
        "No" or "Jinete"
      </h2>
    ),
    placement: "bottom",
    target: "#say-answer",
    title: "Step 4: Say the Answer",
  },
  {
    content: (
      <h2>Listen to the correct answer to see if your answer is correct</h2>
    ),
    placement: "bottom",
    target: "#play-answer",
    title: "Step 5: Play the Answer",
  },
  {
    content: (
      <h2>See the answer if you do not understand it while listening</h2>
    ),
    placement: "bottom",
    target: "#show-answer",
    title: "Step 6: Reveal the Answer",
  },
];

export const stepsHome = [
  {
    content: <h2 className="text-xl">Let's begin our journey!</h2>,
    placement: "center",
    target: "body",
  },
  {
    content: (
      <h2>
        Here you can learn all the words for the story! Please, do not skip this
        step!
      </h2>
    ),
    placement: "bottom",
    target: "#learn-1",
    title: "First step: Learn the words",
  },
  {
    content: (
      <h2>
        Here you can answer questions about the story! Please, answer all the
        questions!
      </h2>
    ),
    placement: "bottom",
    target: "#play-1",
    title: "Second step: Answer the questions",
  },
  {
    content: (
      <h2>
        Read the full story to see how much you've learned & to enjoy your
        progress!
      </h2>
    ),
    placement: "bottom",
    target: "#read-1",
    title: "Third step: Read the story",
  },
];

export const stepsWords = [
  {
    content: <h2 className="text-xl">Let's learn new words!</h2>,
    placement: "center",
    target: "body",
  },
  {
    content: (
      <h2>
        Click Again if you dont know the word in the card above. It will come up
        again later.
      </h2>
    ),
    placement: "bottom",
    target: "#again",
    title: "Again = I dont know it at all",
  },
  {
    content: (
      <h2>Click Hard if it took you more than 1 minute to remember the word</h2>
    ),
    placement: "bottom",
    target: "#hard",
    title: "Hard = I know it only 10% of the time",
  },
  {
    content: (
      <h2>Click Good if it took you less than 1 minute to remember the word</h2>
    ),
    placement: "bottom",
    target: "#good",
    title: "Good = I know it 50% of the time",
  },
  {
    content: (
      <h2>
        Click Easy if it took you less than 10 seconds to remember the word
      </h2>
    ),
    placement: "bottom",
    target: "#easy",
    title: "Easy = I know it 100% of the time",
  },
];

export const story1words = [
  {
    id: 1,
    text: {
      es: "Sin cabeza",
      en: "without head / headless",
      ar: "بدون رأس",
    },
    image: "/img/headless-small.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 2,
    text: {
      es: "Con cabeza",
      en: "with a head",
      ar: "مع رأس",
    },
    image: "/img/headless-small.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 3,
    text: {
      es: "Yo soy",
      en: "I am",
      ar: "أنا",
    },
    image: "/img/horseman.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 4,
    text: {
      es: "Tu eres",
      en: "You are",
      ar: "أنت",
    },
    image: "/img/horseman.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 5,
    text: {
      es: "Ella es",
      en: "She is",
      ar: "هي",
    },
    image: "/img/horseman.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 6,
    text: {
      es: "El es",
      en: "He is",
      ar: "هو",
    },
    image: "/img/horseman.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 7,
    text: {
      es: "Chica",
      en: "Girl",
      ar: "فتاة",
    },
    image: "/img/horseman.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 8,
    text: {
      es: "Quién",
      en: "who",
      ar: "من",
    },
    image: "/img/who.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 9,
    text: {
      es: "Qué",
      en: "What",
      ar: "ماذا",
    },
    image: "/img/what.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 10,
    text: {
      es: "Cómo",
      en: "How",
      ar: "كيف",
    },
    image: "/img/what.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 11,
    text: {
      es: "Hay",
      en: "There is",
      ar: "هناك",
    },
    image: "/img/there_is.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 12,
    text: {
      es: "Él tiene un problema.",
      en: "He has a problem.",
      ar: "لديه مشكلة",
    },
    image: "/img/problem.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 13,
    text: {
      es: "Está en Nueva York",
      en: "He is in New York",
      ar: "هو في نيويورك",
    },
    image: "/img/nyc.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 14,
    text: {
      es: "Él va a",
      en: "He goes to",
      ar: "هو يذهب إلى",
    },
    image: "/img/he_goes.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 15,
    text: {
      es: "Al doctor",
      en: "The doctor",
      ar: "إلى الطبيب",
    },
    image: "/img/doctor.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 16,
    text: {
      es: "Pregunta",
      en: "Ask(s)",
      ar: "يسأل",
    },
    image: "/img/asks.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 16,
    text: {
      es: "Tu",
      en: "Your",
      ar: "لك",
    },
    image: "/img/you.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 17,
    text: {
      es: "Él dice",
      en: "He says",
      ar: "يقول",
    },
    image: "/img/he_says.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 18,
    text: {
      es: "Yo tengo",
      en: "I have",
      ar: "أنا لدي",
    },
    image: "/img/i_have.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 19,
    text: {
      es: "Dolor de",
      en: "Pain of",
      ar: "ألم في",
    },
    image: "/img/i_have.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 20,
    text: {
      es: "Grande",
      en: "Big",
      ar: "كبير",
    },
    image: "/img/big.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 21,
    text: {
      es: "Casa",
      en: "House",
      ar: "بيت",
    },
    image: "/img/house.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 22,
    text: {
      es: "Hombre rico",
      en: "Rich man",
      ar: "رجل غني",
    },
    image: "/img/rich_man.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 23,
    text: {
      es: "Mil millones",
      en: "Billion",
      ar: "مليار",
    },
    image: "/img/billion.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 24,
    text: {
      es: "¿Puedes ayudarme?",
      en: "Can you help me?",
      ar: "هل يمكنك مساعدتي؟",
    },
    image: "/img/you.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 25,
    text: {
      es: "No puedo ayudar",
      en: "I cannot help",
      ar: "لا أستطيع المساعدة",
    },
    image: "/img/i_cant_help.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 26,
    text: {
      es: "Puedo ayudar",
      en: "I can help",
      ar: "أستطيع المساعدة",
    },
    image: "/img/help.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 27,
    text: {
      es: "Pequeño",
      en: "Small",
      ar: "صغير",
    },
    image: "/img/small.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
  {
    id: 28,
    text: {
      es: "Animales",
      en: "Animals",
      ar: "حيوانات",
    },
    image: "/img/animals.jpg",
    difficulty: 0,
    due: new Date().toLocaleString(),
    elapsed_days: 0,
    lapses: 0,
    last_review: null,
    reps: 0,
    scheduled_days: 0,
    stability: 0,
    state: 0,
  },
];
