import React, { useState } from 'react';
import { fibonacciNumber } from 'freshkitetwenty';

const FibonacciNumber = () => {

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

        // Calculate and display the Fibonacci number.
        setDisplayAnswer((() => {
            return `Fibonacci of ${num} is ${fibonacciNumber(num)}`
        }));
    };

    return (
        <div className="container bg-neutral-700 text-white rounded-2xl p-5 max-w-[400px] text-center">
            <h1 className="text-xl font-bold">Fibonacci Number</h1>
            <p className="mb-2 mt-2 text-neutral-300">Enter a number and find it's fibonacci.</p>

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

export default FibonacciNumber;