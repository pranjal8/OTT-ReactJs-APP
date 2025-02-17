import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const handleGptSearchCLick = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, 1920, Koi Mil Gaya, Don";

    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResult.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-1/2 bg-black grid grid-cols-12 "
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 "
        />
        <button
          onClick={handleGptSearchCLick}
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg "
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
