import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  { id: 1, title: "A Horseman's Problem", img: "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg", words: [], games: [] },
  { id: 2, title: "Mike Tyson's Barber", img: "https://picsum.photos/499", words: [], games: [] },
  // Add more stories here
];

const Stories = () => {
  return (
<div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 flex flex-col items-center p-4">
  <h1 className="bg-white text-3xl font-bold text-gray-800 mb-4 p-4 rounded-lg border border-gray-300">TaleTalk</h1>
  <div className="w-full max-w-md">
    {stories.map((story, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg mb-6 p-4 flex items-center space-x-4">
        <img src={story.img} alt={story.title} className="w-24 h-24 rounded-md object-cover" />
        <div>
          <h2 className="text-xl font-semibold text-gray-700">{index + 1} {story.title}</h2>
          <div className="flex space-x-2 mt-2">
            <Link to={`/words/${story.id}`} className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-600">Words</Link>
            <Link to={`/games/${story.id}`} className="bg-green-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-green-600">Games</Link>
            <Link to={`/story/${story.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-yellow-600">Story</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Stories;
