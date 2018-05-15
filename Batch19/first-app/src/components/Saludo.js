import React, { Component } from 'react';

class Saludo extends Component {
//el "state" siempre es state  y siempre es un objeto
   /* constructor(){
        super();
        this.state = {
            saludo:"Hola desde React"
        }
    }
*/
    constructor(props){
        super(props);
        
       
    }

   render( ){

       return (
           <div>
               <h3>{this.props.text}</h3>
           </div>
       );
   }

}


export default Saludo;