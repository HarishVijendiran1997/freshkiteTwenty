import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-neutral-800 text-white p-4 h-[100px] flex">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold"><strong className="text-6xl text-transparent bg-gradient-to-b from-blue-500 via-pink-500 to-orange-500 bg-clip-text">F</strong>reshkite <strong className="text-5xl text-transparent bg-gradient-to-b from-blue-500 via-pink-500 to-orange-500 bg-clip-text">T</strong>wenty</h1>
      </div>
    </nav>
  );
};

export default Navbar;
