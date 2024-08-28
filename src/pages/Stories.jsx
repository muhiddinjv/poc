import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  { id: 1, title: "Horseman's Problem", img: "https://raw.githubusercontent.com/muhiddinjv/poc/main/src/assets/img/headless_horseman.jpg", words: [], games: [] },
  { id: 2, title: "Mike Tyson's Barber", img: "https://picsum.photos/499", words: [], games: [] },
  // Add more stories here
];

const Stories = () => {
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data: { session } } = await supabase.auth.getSession();
  //     setUser(session?.user || null);
  //   };

  //   getUser();
  // }, []);

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  //   setUser(null);
  //   navigate('/signin'); // Redirect to sign-in page after sign-out
  // };

  return (
    <section className="min-h-screen bg-purple-500 flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white flex justify-between items-center mb-4 rounded-md">
          <h1 className="text-3xl font-bold text-purple-600 p-2 text-center w-full">TaleTalk</h1>
          {/* {user && (
            <div className="flex items-center space-x-3 mr-2">
              <img src={user.user_metadata.avatar_url || 'https://placehold.co/150'} alt="User Avatar" className="hidden w-10 h-10 rounded-full object-cover" />
              <FontAwesomeIcon size='xl' icon={faSignOut} onClick={handleSignOut} className="p-1 text-purple-600 cursor-pointer hover:text-purple-700"/>
            </div>
          )} */}
        </div>
        {stories.map((story, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg mb-4 p-2 flex items-center space-x-3">
            <img src={story.img} alt={story.title} className="w-24 h-24 rounded-md object-cover" />
            <div className='flex flex-col justify-around items-between min-h-24'>
              <h2 className="text-xl font-semibold text-gray-700">{index + 1} {story.title}</h2>
              <div className="flex flex-wrap space-x-2">
                <Link to={`/words/${story.id}`} className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-600">Learn</Link>
                <Link to={`/games/${story.id}`} className="bg-green-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-green-600">Play</Link>
                <Link to={`/story/${story.id}`} className="bg-pink-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-pink-600">Read</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;
