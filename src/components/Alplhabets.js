import React from 'react'

function Alphabets() {

    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return (
    <div>
    {/* <p>{wor.split("").fill("_").join(" ")}</p> */}
            {alphabets
            .map((alphabet, index) => 
            <button key={index}>{alphabet}</button>)}
    </div>
  )
}

export default Alphabets;