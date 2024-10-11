// stories.js - Main stories collection
export const stories = [
    {
      _id: "story1",
      title: {
        en: "The Headless Horseman",
        es: "El Jinete Sin Cabeza",
        ar: "الفارس بلا رأس",
        ru: "Всадник без головы",
        uz: "Boshsiz chavandoz"
      },
      description: {
        en: "A funny story about a headless horseman with a headache",
        es: "Una historia graciosa sobre un jinete sin cabeza con dolor de cabeza",
        ar: "قصة مضحكة عن فارس بلا رأس يعاني من صداع",
        ru: "Забавная история о безголовом всаднике с головной болью",
        uz: "Bosh og'rig'idan aziyat chekayotgan boshsiz chavandoz haqida kulgili hikoya"
      },
      difficulty: "beginner",
      availableLanguages: ["en", "es", "ar", "ru", "uz"],
      defaultLanguage: "en",
      order: 1
    }
  ];
  
  // statements.js - Statements collection
  export const statements = [
    {
      _id: "stmt1",
      storyId: "story1",
      image: "https://raw.githubusercontent.com/muhiddinjv/poc/refs/heads/main/public/img/horseman.jpg",
      text: {
        en: "There is a horseman",
        es: "Hay un jinete",
        ar: "هناك فارس",
        ru: "Там всадник",
        uz: "U yerda chavandoz bor"
      },
      order: 1
    }
  ];
  
  // questions.js - Questions collection
  export const questions = [
    {
      _id: "q1",
      storyId: "story1",
      statementId: "stmt1",
      image: "https://picsum.photos/500",
      points: 20,
      order: 1,
      question: {
        en: "Is there a horseman?",
        es: "¿Hay un jinete?",
        ar: "هل هناك فارس؟",
        ru: "Там есть всадник?",
        uz: "U yerda chavandoz bormi?"
      },
      answer: {
        en: "yes",
        es: "sí",
        ar: "نعم",
        ru: "да",
        uz: "ha"
      },
      feedback: {
        en: "There is a horseman.",
        es: "Hay un jinete.",
        ar: "نعم، هناك فارس",
        ru: "Да, там всадник.",
        uz: "Ha, u yerda chavandoz bor."
      },
      explanation: {
        en: "We use 'there is' to indicate existence",
        es: "We use 'hay' to indicate existence",
        ar: "نستخدم 'هناك' للإشارة إلى الوجود",
        ru: "Мы используем 'там есть' чтобы указать на существование",
        uz: "Mavjudlikni ko'rsatish uchun 'bor' so'zini ishlatamiz"
      }
    }
  ];
  
  // MongoDB Schemas
  const mongoose = require('mongoose');
  
  // Language fields schema (reusable)
  const LanguageFieldSchema = {
    en: String,
    es: String,
    ar: String,
    ru: String,
    uz: String
  };
  
  const StorySchema = new mongoose.Schema({
    _id: String,
    title: LanguageFieldSchema,
    description: LanguageFieldSchema,
    difficulty: String,
    availableLanguages: [String],
    defaultLanguage: String,
    order: Number
  }, { timestamps: true });
  
  const StatementSchema = new mongoose.Schema({
    _id: String,
    storyId: { type: String, ref: 'Story' },
    image: String,
    text: LanguageFieldSchema,
    order: Number
  }, { timestamps: true });
  
  const QuestionSchema = new mongoose.Schema({
    _id: String,
    storyId: { type: String, ref: 'Story' },
    statementId: { type: String, ref: 'Statement' },
    image: String,
    points: Number,
    order: Number,
    question: LanguageFieldSchema,
    answer: LanguageFieldSchema,
    feedback: LanguageFieldSchema,
    explanation: LanguageFieldSchema
  }, { timestamps: true });
  
  // Helper functions
  export const getStoryContent = async (storyId, language) => {
    const story = await Story.findById(storyId);
    if (!story.availableLanguages.includes(language)) {
      language = story.defaultLanguage;
    }
    
    return {
      title: story.title[language],
      description: story.description[language],
      difficulty: story.difficulty,
      order: story.order
    };
  };
  
  export const getStatementContent = async (statementId, language) => {
    const statement = await Statement.findById(statementId);
    const story = await Story.findById(statement.storyId);
    
    if (!story.availableLanguages.includes(language)) {
      language = story.defaultLanguage;
    }
  
    return {
      image: statement.image,
      text: statement.text[language],
      order: statement.order
    };
  };
  
  export const getQuestionContent = async (questionId, language) => {
    const question = await Question.findById(questionId);
    const story = await Story.findById(question.storyId);
    
    if (!story.availableLanguages.includes(language)) {
      language = story.defaultLanguage;
    }
  
    return {
      image: question.image,
      points: question.points,
      question: question.question[language],
      answer: question.answer[language],
      feedback: question.feedback[language],
      explanation: question.explanation[language]
    };
  };
  
  // Example usage
  const example = async () => {
    // Get story in Arabic
    const arabicStory = await getStoryContent('story1', 'ar');
  
    // Get statement in Russian
    const russianStatement = await getStatementContent('stmt1', 'ru');
  
    // Get all questions for a lesson in Uzbek
    const lesson = await Lesson.findById('lesson1');
    const uzbekQuestions = await Promise.all(
      lesson.questionIds.map(id => getQuestionContent(id, 'uz'))
    );
  };