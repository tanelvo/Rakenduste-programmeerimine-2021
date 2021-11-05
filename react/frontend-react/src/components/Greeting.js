import React, {useState} from "react"
import propTypes from 'prop-types'

const Greeting = (props) => {
  const { name } = props;
  const { age } = props;
  const [counter, setCounter] = useState(0)
  const [info, setInfo] = useState("no info")
  const [loading, setLoading] = useState(false)
  return (
    <>
      <h1 onClick={() => setCounter(counter+1)}>Greetings {name}, counter {counter}</h1>
      <h1>Name: {name}</h1>
      <h1>Info: {info}</h1>
      <h1>Age: { age }</h1>
      <h1>Counter: {counter}</h1>
      <input 
        type="text" 
        onChange={event => setInfo(event.target.value)}
      /><br/>
      <button onClick={() => setLoading(!loading)}>Toggle Loading true/false</button>
      { loading ? 
          <div>loading true</div>
          : 
          <div>loading false</div> 
      }
    </>
  )
}

Greeting.defaultProps = {  // Default juhul kui name ja age puudub
  name: "Hello",
  age: 2
}

Greeting.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired
}

export default Greeting