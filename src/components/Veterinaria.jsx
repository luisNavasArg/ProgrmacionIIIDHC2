import React from "react"
const Veterinaria = (props) => {

    return (
        <React.Fragment>
            <h2>Veterinaria</h2>
                {props.perritos.map((perro, i) => {
                    let k=i+"div"
                    return <div key={k}>
                        <h2>Nombre: {perro.nombre}</h2>
                        <ul> 
                            <li key={i}> {perro.edad} años </li>
                            </ul>
                    </div>
                })}
        </React.Fragment>
    )
}
export default Veterinaria