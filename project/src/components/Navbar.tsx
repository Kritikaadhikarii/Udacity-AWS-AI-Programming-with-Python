"use client";
import React from "react";
import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
} from "lucide-react";

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div
      className={`bg-white text-black border-r-2 border-r-gray-100 h-lvh transition-all duration-300 ease-in-out ${
        isClicked ? "w-16" : "w-64"
      }`}
    >
      <div className="border-b-2 border-b-gray-100 flex items-center justify-between p-4">
        {!isClicked && (
          <h1 className="text-sm font-light whitespace-nowrap">LearnAI&ML</h1>
        )}
        <button
          onClick={handleClick}
          className="hover:bg-amber-50 hover:text-amber-600 rounded-full p-2"
        >
          {isClicked ? (
            <ArrowRightFromLine size={16} />
          ) : (
            <ArrowLeftFromLine size={16} />
          )}
        </button>
      </div>
      
      {!isClicked && (
        <div className="overflow-y-auto">
          {[
            "AI Programming with Python",
            "Course 1",
            "Course 2",
            "Course 3",
            "Course 4",
            "Course 5",
            "Course 6",
            "Course 7",
            "Course 8",
            "Course 9",
            "Course 10",
          ].map((course, index) => (
            <p
              key={index}
              className="text-sm font-light p-4 hover:bg-amber-50 hover:text-amber-600 whitespace-nowrap"
            >
              {course}
            </p>
          ))}

          <h1
            className="text-sm font-light p-4 border-t-2 border-t-gray-100 hover:bg-amber-50 hover:text-amber-600 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kritikaadhikari/",
                "_blank"
              )
            }
          >
            Contact Author
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
