import React from "react";

const Nav =(props)=>{
    //this.props.datos.nombre="Mi pizzería"// son de solo lectura las props
    return(<React.Fragment>
        <h1>{props.datos.nombre}</h1>
        <ul>
            <li>Home</li>
            <li>Somos</li>
            <li>Contacto</li>
        </ul>
    </React.Fragment>)
}
export default Nav;
