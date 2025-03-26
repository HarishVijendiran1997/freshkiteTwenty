import React from "react";
import IsOddOrEven from "../problems/OddOrEven";
import SwapTwoVariables from "../problems/SwapTwoVariables";
import LeapYear from "../problems/LeapYear";
import Binary from "../problems/Binary";
import SumOfDigits from "../problems/SumOfDigits";
import Factorial from "../problems/Factorial";
import Prime from "../problems/Prime";
import FibonacciNumber from "../problems/FibonacciNumber";
import PalindromeNumber from "../problems/PalindromeNumber";
import PalindromeString from "../problems/PalindromeString";

const Hero = () => {
  return (
    <div className="md:bg-gradient-to-r bg-gradient-to-b from-neutral-950 to-neutral-900 min-h-screen w-full p-4 flex justify-evenly items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full p-5">
        <IsOddOrEven />
        <SwapTwoVariables />
        <LeapYear />
        <Binary />
        <SumOfDigits />
        <Factorial />
        <Prime />
        <FibonacciNumber />
        <PalindromeNumber />
        <PalindromeString />
      </div>
    </div>
  );
};

export default Hero;
