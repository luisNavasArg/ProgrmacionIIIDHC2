import React,{Component} from 'react'
import styles from './principal.module.css'
export default class Principal extends React.Component{
   constructor(props){
      super(props)
      this.state={
         color:props.color
      }
      this.cambiarColor=this.cambiarColor.bind(this)

   }
   cambiarColor(){
      this.setState({
         color:"blue",
         fondo:"black"
      })
      // this.state.color="blue" no se puede cambiar el estado
   }
   render(){
      
      return(
         <React.Fragment>
         <h1 onClick={this.cambiarColor} 
         style={{color:this.state.color, backgroundColor:this.state.fondo}}
         className={styles.centrar}>Mi título</h1>
         {this.props.datos.datos.map((p,i)=>{
         return <p key={i.toString()}>{p.name}</p>
      }
         )}
         </React.Fragment>
      )
   }
}
 
