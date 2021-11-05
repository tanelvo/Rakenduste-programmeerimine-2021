import { useState } from "react"
import Fun from './Fun';
import Greeting from './Greeting';
import Homework from "./Homework";
import './App.css';

function ShowMagic() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name={"Tanel"} age={2} />
      <Homework dayOfBirth={"21"} month={"06"}/>
    </div>
  );
}

export default ShowMagic;
