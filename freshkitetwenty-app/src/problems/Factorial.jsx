import React, { useState } from 'react';
import { factorial } from 'freshkitetwenty';

const Factorial = () => {

    const [number, setNumber] = useState('');
    const [displayAnswer, setDisplayAnswer] = useState('');


    // Function to handle changes in the input number.
    const handleNumberChange = (e) => {
        setNumber(e.target.value.trim())
    };

    // Function to check if a number is odd or even.
    const handleAnswer = () => {
        if (number === '') {
            setDisplayAnswer('Please enter a number');
            return;
        }

        // Convert input string to a number and check if it's a valid number or not. If not, display an error message.
        const num = Number(number);
        if (isNaN(num)) {
            setDisplayAnswer('Invalid input. Please enter a valid number.');
            return;
        }

        // Calculate the factorial of the number.
        setDisplayAnswer((() => {
            if (num < 0) {
                return 'Invalid input. Please enter a positive number.';
            }
            else if (num === 0 || num === 1) {
                return `${num}! equals 1`;
            } else {
                return `${num}! equals ${factorial(num)}`;
            }
        }));
    };

    return (
        <div className="container bg-neutral-700 text-white rounded-2xl p-5 max-w-[400px] text-center">
            <h1 className="text-xl font-bold">Factorial</h1>
            <p className="mb-2 mt-2 text-neutral-300">Enter a number and find it's factorial.</p>

            <input
                className="w-full border border-gray-400 p-2 rounded-md text-center"
                type="text"
                value={number}
                onChange={handleNumberChange}
            />

            <button
                className="bg-gradient-to-r from-purple-600 to-orange-600 text-white font-semibold rounded-md p-2 mt-4 w-full"
                onClick={handleAnswer}
            >
                Find
            </button>

            {displayAnswer && <p className="text-green-600 font-bold mt-2">{displayAnswer}</p>}
        </div>
    );
};

export default Factorial;