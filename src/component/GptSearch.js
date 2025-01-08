import React from 'react'
import background from "../assets/background.jpg";
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10 " >
        <img src={background} alt="background" />
      </div>

       <GptSearchBar />
       <GptMovieSuggestion />



    </div>
  )
}

export default GptSearch