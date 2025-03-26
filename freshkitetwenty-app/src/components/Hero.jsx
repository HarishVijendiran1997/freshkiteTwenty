import React from "react";
import IsOddOrEven from "../problems/OddOrEven";
import SwapTwoVariables from "../problems/SwapTwoVariables";
import LeapYear from "../problems/LeapYear";
import Binary from "../problems/Binary";
import SumOfDigits from "../problems/SumOfDigits";

const Hero = () => {
  return (
    <div className="md:bg-gradient-to-r bg-gradient-to-b from-neutral-950 to-neutral-900 min-h-screen w-full p-4 flex justify-evenly items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full p-5">
        <IsOddOrEven />
        <SwapTwoVariables />
        <LeapYear/>
        <Binary/>
        <SumOfDigits/>
      </div>
    </div>
  );
};

export default Hero;
