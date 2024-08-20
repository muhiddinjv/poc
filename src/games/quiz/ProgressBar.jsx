const ProgressBar = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;
    return (
        <div className="flex items-center justify-center mb-2">
            <div className="bg-gray-300 rounded-full w-72 h-2.5 m-2">
                <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${progressPercentage}%` }}/>
            </div>
        </div>
    );
};
export default ProgressBar;