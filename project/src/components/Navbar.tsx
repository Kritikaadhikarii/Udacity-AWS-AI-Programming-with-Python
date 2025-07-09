"use client";
import React from "react";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="bg-white text-black border-r-2 border-r-gray-100 w-fit h-lvh">
      <div className="border-b-2 border-b-gray-100 flex flex-row justify-between p-4 items-center">
        <h1 className="text-sm font-light ">LearnAI&ML</h1>

        {!isClicked ? (
          <div className=" hover:bg-amber-50 hover:text-amber-600 rounded-full p-3">
            <ArrowLeftFromLine size={16} onClick={handleClick} />
          </div>
        ) : (
          <div className=" hover:bg-amber-50 hover:text-amber-600 rounded-full p-3">
            <ArrowRightFromLine size={16} onClick={handleClick} />
          </div>
        )}
      </div>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        AI Programming with Python
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 1
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 2
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 3
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 4
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 5
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 6
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 7
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 8
      </p>

      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 9
      </p>
      <p className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600">
        Course 10
      </p>

      <h1
        className="text-sm font-light p-4 border-t-2 border-t-gray-100 hover:bg-amber-50 hover:text-amber-600"
        onClick={() =>
          window.open("https://www.linkedin.com/in/kritikaadhikari/", "_blank")
        }
      >
        Contact Author
      </h1>
    </div>
  );
};

export default Navbar;
