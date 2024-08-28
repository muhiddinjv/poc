import React, { useState } from 'react';

const SrtToJson = () => {
    const [wordTimings, setWordTimings] = useState([]);
    const [progress, setProgress] = useState(0);
    const [isConverting, setIsConverting] = useState(false);
    const [isConverted, setIsConverted] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.name.endsWith(".srt")) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const srtText = e.target.result;
                setIsConverting(true);
                setTimeout(() => {
                    const timings = srtToWordTimings(srtText);
                    setWordTimings(timings);
                    setIsConverting(false);
                    setIsConverted(true);
                }, 1000);
            };
            reader.readAsText(file);
        } else {
            console.error("Please select a valid SRT file.");
        }
    };

    const srtToWordTimings = (srtText) => {
        const lines = srtText.trim().split('\n');
        const wordTimings = [];
        const totalLines = lines.length;

        for (let i = 0; i < totalLines; i++) {
            setProgress(Math.floor((i / totalLines) * 100));

            if (lines[i].includes('-->')) {
                const timing = lines[i];
                const text = lines[i + 1];

                const [startTimeStr, endTimeStr] = timing.split(' --> ');
                const startTimeParts = startTimeStr.split(':');
                const endTimeParts = endTimeStr.split(':');

                const startSeconds = parseInt(startTimeParts[1], 10) * 60 + parseFloat(startTimeParts[2].replace(',', '.'));
                const endSeconds = parseInt(endTimeParts[1], 10) * 60 + parseFloat(endTimeParts[2].replace(',', '.'));

                const words = text.split(' ');
                const timePerWord = (endSeconds - startSeconds) / words.length;

                words.forEach((word, index) => {
                    const wordStartTime = startSeconds + index * timePerWord;
                    const wordEndTime = startSeconds + (index + 1) * timePerWord;

                    // Normalize times to ensure they are within the 0-59.99 second range
                    const normalizedStartTime = parseFloat((wordStartTime % 60).toFixed(2));
                    const normalizedEndTime = parseFloat((wordEndTime % 60).toFixed(2));

                    wordTimings.push({
                        word: word,
                        start: normalizedStartTime,
                        end: normalizedEndTime
                    });
                });
            }
        }

        return wordTimings;
    };

    const handleDownload = () => {
        const json = JSON.stringify(wordTimings, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'wordTimings.json';
        link.click();
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center py-12">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">SRT to Word Timings Converter</h1>
                <input
                    type="file"
                    accept=".srt"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
                <button
                    onClick={handleFileChange}
                    disabled={!wordTimings.length}
                    className={`mt-6 w-full py-2 px-4 rounded-lg text-white font-bold ${isConverting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    Convert
                </button>
                
                {isConverting && (
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2 text-gray-600">Converting...</h2>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p className="text-gray-500 mt-2">{progress}%</p>
                    </div>
                )}

                {isConverted && (
                    <div className="mt-6">
                        <button
                            onClick={handleDownload}
                            className="w-full py-2 px-4 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700"
                        >
                            Download JSON
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SrtToJson;

/*
if (navigator.storage && navigator.storage.estimate) {
  const quota = await navigator.storage.estimate();
  // quota.usage -> Number of bytes used.
  // quota.quota -> Maximum number of bytes available.
  const percentageUsed = (quota.usage / quota.quota) * 100;
  console.log(`You've used ${percentageUsed}% of the available storage.`);
  const remaining = quota.quota - quota.usage;
  console.log(`You can write up to ${remaining} more bytes.`);
}
*/
