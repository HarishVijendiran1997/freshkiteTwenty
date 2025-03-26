import React, { useState } from 'react';
import { swapTwoVariables } from 'freshkitetwenty';

const SwapTwoVariables = () => {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [displayAnswer, setDisplayAnswer] = useState('');

  const handleAChange = (e) => {
    setA(e.target.value.trim());
  };

  const handleBChange = (e) => {
    setB(e.target.value.trim());
  };

  const handleAnswer = () => {
    if (A === '' || B === '') {
      setDisplayAnswer('Please enter two numbers');
      return;
    }

    const a = Number(A);
    const b = Number(B);
    if (isNaN(a) || isNaN(b)) {
      setDisplayAnswer('Invalid input. Please enter valid numbers.');
      return;
    }

    const [newA, newB] = swapTwoVariables(a, b);
    setDisplayAnswer(`Swapped values: A = ${newA}, B = ${newB}`);
  };

  return (
    <div className="container bg-neutral-700 text-white rounded-2xl p-5 max-w-full text-center">
      <h1 className="text-lg font-bold">Swap Two Variables</h1>
      <p className="mb-2 text-gray-300">Enter two numbers to swap their values.</p>

      <label className=" font-bold mt-2">A</label>
      <input
        className="w-full border border-gray-400 p-2 rounded-md text-center mb-2"
        type="text"
        placeholder="Enter a number"  
        value={A}
        onChange={handleAChange}
      />
      <label className=" font-bold mt-2">B</label>
      <input
        className="w-full border border-gray-400 p-2 rounded-md text-center mb-2"
        type="text"
        placeholder="Enter a number"
        value={B}
        onChange={handleBChange}
      />


      <button
        className="bg-gradient-to-r from-purple-600 to-orange-600 text-white font-semibold rounded-md p-2 m-2 w-full"
        onClick={handleAnswer}
      >
        Swap
      </button>

      {displayAnswer && <p className="text-green-600 font-bold mt-2">{displayAnswer}</p>}
    </div>
  );
};

export default SwapTwoVariables;