import React, { useState } from "react"

function StateExample() {
    const [name, setName] = React.useState("Nothing")
    return(
        <>
            <h1>Yo!</h1>
            <input type="text" onChange={(event) => setName(event.target.value)}></input>
            <span>{ name }</span>
        </>

    )
}
export default StateExample