const ProgressBar = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;
    return (
        <div className=" bg-gray-300 rounded-full h-2.5 m-4">
            <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};
export default ProgressBar;