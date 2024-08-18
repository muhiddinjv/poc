import React, { useState } from 'react';

function Games() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showResponse, setShowResponse] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [explanation, setExplanation] = useState(false);

  const [questions] = useState([
    {
      id: 1,
      image: 'https://picsum.photos/500',
      question: '(Does) Genesio work at a university?',
      translation: 'Genesio ishla(ydimi) bir universitet da?',
      answer: 'Yes, he works at a university',
    },    {
        id: 2,
        image: 'https://picsum.photos/499',
        question: '(Does) Genesio work at a school?',
        translation: 'Genesio ishla(ydimi) bir maktab da?',
        answer: 'No, doesn\'t work at school. He works at a university',
      },
    // Add more questions here as needed
  ]);

  // Handler to move to the previous question
  const prevQuestion = () => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : questions.length - 1));
  };

  // Handler to move to the next question
  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev < questions.length - 1 ? prev + 1 : 0));
  };

  // Handler to "play" audio (mocked as a console log)
  const playAudio = () => {
    console.log('Playing audio for question:', questions[currentQuestion].question);
    alert(`Playing audio for: ${questions[currentQuestion].question}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="h-screen bg-white shadow-lg max-w-lg w-full py-4">
        <div className="flex justify-center items-center border-b px-4 py-2">
          <div className="space-x-2">
            <button className="py-1 px-2 bg-gray-200 rounded">Quiz</button>
            <button className="py-1 px-2 bg-gray-200 rounded">Gapfil</button>
            <button className="py-1 px-2 bg-gray-200 rounded">Number</button>
            <button className="py-1 px-2 bg-gray-200 rounded">Reorder</button>
            <button className="py-1 px-2 bg-gray-200 rounded">Retell</button>
          </div>
          <div className="text-lg text-gray-700 border px-2 ml-2 rounded">{questions[currentQuestion].id}</div>
        </div>
        <div className="flex justify-center items-center py-4 bg-gray-50">
          <img src={questions[currentQuestion].image} alt="Character" className="w-72 h-72"/>
        </div>
        <div className="flex justify-center space-x-2 items-center px-4 py-2 bg-gray-100">
         
          <div className="flex space-x-2">
            <button onClick={prevQuestion} className="bg-gray-300 px-3 py-1 rounded">{'<'}</button>
            <button onClick={playAudio} className="bg-gray-300 px-3 py-1 rounded">Listen</button>
            <button className="bg-gray-300 px-3 py-1 rounded">Speak</button>
            <button onClick={nextQuestion} className="bg-gray-300 px-3 py-1 rounded">{'>'}</button>
          </div>
        </div>
        <div className="text-center py-2" style={{ cursor: 'pointer' }}>
            <div className='py-2 text-lg'>There is a headless horseman</div>
            <div onClick={() => setShowQuestion(!showQuestion)} className='font-bold border-t'>
            {showQuestion ? (<div className="py-2">
              {questions[currentQuestion].question}
                {/* <p>{questions[currentQuestion].translation}</p> */}
            </div>) : <div className="py-2">Tap to see the question</div>}
            </div>
            <p className="px-4 py-2 border-t text-center">{showResponse && "Listening to Your answer..."}</p>
            <div  onClick={() => setShowAnswer(!showAnswer)}>
              {showAnswer ? <p className="px-4 py-2 border-t text-center">{questions[currentQuestion].answer}</p> : <p className="px-4 py-2 border-t text-center">Tap to see the correct answer</p>}
            </div>
            <div onClick={() => setExplanation(!explanation)} className='hidden'>
              {explanation ? <p className="px-4 py-2 border-t text-center">wow{questions[currentQuestion].explanation}</p> : <p className="px-4 py-2 border-t text-center">Tap to see the explanation</p>}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
