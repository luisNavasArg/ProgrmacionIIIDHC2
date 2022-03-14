import React from "react"

let Array = [56,23,7,8,9]
const Keys =()=>{
    return(
        <React.Fragment>
            {Array.map((numero,i)=>{
                console.log(numero.toString()+i)
            return <li key={numero+i}>{numero}</li>
            })}
        </React.Fragment>
    )
}

export default Keys