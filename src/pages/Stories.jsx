import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  { id: 1, title: "A Horseman's Problem", img: "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg", words: [], games: [] },
  { id: 2, title: "Mike Tyson's Barber", img: "https://picsum.photos/499", words: [], games: [] },
  // Add more stories here
];

const Stories = () => {
  return (
<div className="min-h-screen bg-purple-500 flex flex-col items-center p-4">
  <h1 className="bg-white text-3xl font-bold text-purple-600 mb-4 p-3 rounded-lg border border-gray-300">TaleTalk</h1>
  <div className="w-full max-w-md">
    {stories.map((story, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg mb-4 p-2 flex items-center space-x-3">
        <img src={story.img} alt={story.title} className="w-24 h-24 rounded-md object-cover" />
        <div className='flex flex-col justify-around items-between min-h-24'>
          <h2 className="text-xl font-semibold text-gray-700">{index + 1} {story.title}</h2>
          <div className="flex flex-wrap space-x-2">
            <Link to={`/words/${story.id}`} className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-600">Words</Link>
            <Link to={`/games/${story.id}`} className="bg-green-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-green-600">Games</Link>
            <Link to={`/story/${story.id}`} className="bg-pink-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-pink-600">Story</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Stories;
