import { useNavigate } from "react-router-dom";
import TopBar from "../../../components/TopBar";
import { lessons } from "../../../data";

export default function QuizzesPage() {
    const navigate = useNavigate();
  
    const handleLessonClick = (lessonId) => {
      navigate(`/games/1/quiz/${lessonId}`);
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-purple-500">
        <div className="w-full max-w-lg min-h-screen pb-8 text-center bg-white shadow-lg">
          <TopBar />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">Select a Lesson</h1>
            <div className="space-y-4 flex flex-col">
              {lessons.map((lesson, index) => (
                <button 
                  key={lesson.id}
                  onClick={() => handleLessonClick(lesson.id)}
                  className="p-2 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Lesson {index + 1}: {lesson.title['es']}
                </button>
              ))}
            </div>
          </div>
          {/* <footer className="bg-gray-100 text-gray-600 py-4 text-center">
            <p className="text-sm">&copy; 2024 Your Language App</p>
          </footer> */}
        </div>
      </div>
    );
  }
  