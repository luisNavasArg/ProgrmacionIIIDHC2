import React from "react"
const Veterinaria = (props) => {

    return (
        <React.Fragment>
            <h2>Veterinaria</h2>
            
                {props.perritos.map((perro, i) => {
                    let k=i+"div"
                    console.log(k)
                    return <div key={k}>
                        <h2>Nombre: {perro.nombre}</h2>
                        <ul> 
                            <li key={i}> {perro.edad} años </li>
                            <li key={i}>Sexo: {perro.sexo} </li>
                            <li key={i}>Tamaño: {perro.tamanio}  </li>
                            <li key={i}>Raza: {perro.raza}  </li>
                            </ul>
                    </div>
                })}
                {props.children}
        </React.Fragment>
    )
}
export default Veterinaria