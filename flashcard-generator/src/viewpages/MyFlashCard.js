// this is MyFlashCard page all the created FlashCard will show here..
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlashcardUI from "../components/Card_UI/FlashcardUI";


const MyFlashCard = () => {
  const navigate = useNavigate();

  const flashcard = useSelector((state) => state.flashcard.flashcards);

  const [showAll, setShowAll] = useState(false);
  // const [flashcards, setFlashcards] = useState(flashcard); 
  // const dispatch = useDispatch();

  // this sets the showlimit according to the state of the Show All Button
  const showLimit = !showAll ? 6 : flashcard.length;

  
  
  return (
    <section className="flex flex-col mt-16">
      {flashcard.length > 0 ? (
        <div>
          <div className="flex flex-wrap">
            {/* This will only display 6 cards according to the problem statement */}
            {flashcard.slice(0, showLimit).map(( {card} , i) => (
              <div>
              <FlashcardUI key={i} card={card} flashcards={flashcard}  />
              </div>
            ))}
          </div>
          <div className="flex justify-end mr-10">
            <button
              className="w-16 mt-1 font-semibold text-lg text-red-600 outline-none border-none active:outline-none active:border-none"
              onClick={() => setShowAll(!showAll)}
            >
              See all
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-white shadow-lg p-20">
          <h1 className="font-semibold text-xl text-slate-500">
            Nothing to SHOW, Go to{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Create Flashcard{" "}
            </span>
            to Create New
          </h1>
        </div>
      )}
    </section>
      
  );
};

export default MyFlashCard;