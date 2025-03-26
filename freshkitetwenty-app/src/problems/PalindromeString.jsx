import React, { useState } from 'react';
import { isPalindromeString } from 'freshkitetwenty';

const PalindromeString = () => {

    const [string, setString] = useState('');
    const [displayAnswer, setDisplayAnswer] = useState('');


    // Function to handle changes in the input string.
    const handleStringChange = (e) => {
        setString(e.target.value.trim())
    };

    //check if there is a empty string and display the error message
    const handleAnswer = () => {
        if (string === '') {
            setDisplayAnswer('Please enter a string value');
            return;
        }

        // Check if the string is a valid string or not. If not, display an error message.
        if (!/^[a-zA-Z]+$/.test(string)) {
            setDisplayAnswer('Invalid input. Please enter a valid string')
            return
        }

        // Check if the string is a palindrome.
        setDisplayAnswer((() => {
            const formattedString = string.toLowerCase();
            return isPalindromeString(formattedString) ? `${string} is a palindrome` : `${string} is a not a palindrome`
        }
        ));
    };

    return (
        <div className="container bg-neutral-700 text-white rounded-2xl p-5 max-w-[400px] text-center">
            <h1 className="text-xl font-bold">Palindrome String Checker</h1>
            <p className="mb-2 mt-2 text-neutral-300">Enter a String and check if it's a palindrome (case-insensitive).</p>

            <input
                className="w-full border border-gray-400 p-2 rounded-md text-center"
                type="text"
                value={string}
                onChange={handleStringChange}
            />

            <button
                className="bg-gradient-to-r from-purple-600 to-orange-600 text-white font-semibold rounded-md p-2 mt-4 w-full"
                onClick={handleAnswer}
            >
                Check
            </button>

            {displayAnswer && <p className="text-green-600 font-bold mt-2">{displayAnswer}</p>}
        </div>
    );
};

export default PalindromeString;