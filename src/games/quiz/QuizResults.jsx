import TopBar from "../../components/TopBar";

const QuizResults = ({
  score,
  totalQuestions,
  totalPoints,
  maxPoints,
  handleTryAgain,
}) => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center">
    <div className="h-screen bg-white shadow-lg max-w-lg w-full text-center">
      <TopBar />
      <h1 className="text-2xl font-bold m-4 text-purple-600">🎉 Tabriklations!</h1>
      <p className="text-xl mb-4">
        To'gri javoblar: {score.correct} / {totalQuestions}
      </p>
      <p className="text-xl mb-4">
        Umumiy hisob: {totalPoints} / {maxPoints}
      </p>
      <div className='flex justify-center'>
        <img src="https://media1.tenor.com/m/Yj1zfwe6KckAAAAC/leonardo-dicaprio-clapping.gif" alt="leonardo-dicaprio-clapping" className="max-w-64 rounded-lg" />
      </div>
      <button
        onClick={handleTryAgain}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 mt-6 transition-colors duration-300 ease-in-out"
      >
        Yana boshlash
      </button>
    </div>
  </div>
);
export default QuizResults;
