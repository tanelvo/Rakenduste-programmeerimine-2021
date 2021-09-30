import React from "react"

const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>Greetings, { name }</h1>
      <p>Age { age }</p>
    </>
  )
}

export default Greeting