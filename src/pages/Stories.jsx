import React from 'react';
import { useNavigate } from 'react-router-dom';

const stories = [
  { id: 1, title: "A Horseman's Problem", img: "https://picsum.photos/500", words: [], games: [] },
  { id: 2, title: "Mike Tyson's Barber", img: "https://picsum.photos/499", words: [], games: [] },
  // Add more stories here
];

const Stories = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="space-y-4 h-screen bg-white shadow-lg max-w-lg w-full py-4">
      <h1 className="px-4 text-center text-2xl font-bold mb-4">STORIES</h1>
        {stories.map(story => (
          <div key={story.id} className="flex items-center space-x-4 bg-gray-100 p-4">
            <img src={story.img} alt={story.title} className="w-16 h-16 rounded"/>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{story.id} {story.title}</h2>
              <div className="space-x-2 mt-2">
                <button onClick={() => navigate(`/words/${story.id}`)} className="bg-blue-500 text-white px-3 py-1 rounded">Words</button>
                <button onClick={() => navigate(`/games/${story.id}`)} className="bg-green-500 text-white px-3 py-1 rounded">Games</button>
                <button onClick={() => alert('Story page not implemented yet')} className="bg-yellow-500 text-white px-3 py-1 rounded">Story</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
