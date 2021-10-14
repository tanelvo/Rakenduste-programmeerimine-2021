import React, {useState} from "react"
import kuki from '../kuki.png' 

function Homework({dayOfBirth, month}) {
    const [cat, showPicture] = useState(false)

    return (
        <>
        <h2>Your birthday: {dayOfBirth}.{month} </h2>
        <button onClick={() => showPicture(!cat)}>Toggle picture</button>
        <br/>
        {cat ? 
            <img src={kuki} alt="cat"></img>
            :
            <div></div>
        }
        </>
    )
}

export default Homework;