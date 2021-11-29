import React, {Component} from "react";

let equipo1 = prompt("Equipo 1"),
         equipo2 = prompt("Equipo 2")



export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
            contador2:0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
        this.sumar2 = this.sumar2.bind(this)
        this.restar2 = this.restar2.bind(this)
    }
    sumar(){
        this.setState({
            contador: this.state.contador + 1
        })
    }
    sumar2(){
        this.setState({
            contador2: this.state.contador2 + 1
        })
    }
    restar(){
        if(this.state.contador > 0){
        this.setState({
            contador: this.state.contador - 1
        })
    }
        else {
            this.setState({
                contador: this.state.contador
            })

        }
    }
    restar2(){
        if(this.state.contador2 > 0){
        this.setState({
            contador2: this.state.contador2 - 1
        })
    }
        else {
            this.setState({
                contador2: this.state.contador2
            })

        }
    }
    
    
    
    render(){
        return(
            <div>
                <h2>Marcador Partido // Eventos ES6</h2>
                <h3>{equipo1}</h3>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                <h3>{equipo2}</h3>
                <h3>{this.state.contador2}</h3>
                <button onClick={this.sumar2}>+</button>
                <button onClick={this.restar2}>-</button>
            </div>
        )
    }
}


// Elimina el Bindeo "Bind()", gracias a las arrow function, 
//                     elimina el "this" y el constructor con su metodo super(),
//                     y el estado "state", se hace directo sin "this"

export class EventosES7 extends Component{

    state={
        contador: 1
    }
    sumar=()=>{
        this.setState({
            contador: this.state.contador + 1
        })
    }
    resta=()=>{
        if(this.state.contador > 0){
            
        this.setState({
            contador: this.state.contador - 1
        })
    }else{
        this.setState({
            contador: this.state.contador 
        })
    }
    }


    render(){
        return(
            <div>
                <h3>Eventos ES7</h3>
                <p> Elimina el Bindeo "Bind()", gracias a las arrow function, 
                  elimina el "this" y el constructor con su metodo super(),
                     y el estado "state", se hace directo sin "this"
                </p>
                <h4>{this.state.contador}</h4>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.resta} >-</button>
                {this.state.contador >0 ? null:<h3>No puedes restar mas</h3>}
            </div>
        )
    }
}



//                     EVENTOS DESDE UN COMPONENTE(EXPRESADA O DECLARADA)

const Boton=(props)=>{
    return(
<button onClick={props.onMyClick}>Evento desde componente</button>
    )
}

// O PODEMOS EXPRESARLO DE ESTA MANERA, SIN LAS PROPS Y DESTRUCTURANDO DIRECTAMENTE

// const Boton=({onMyClick})=>{
//     <button onClick={onMyClick}>Evento desde componente</button>
// }
    
export class MasSobreEventos extends Component{

    handleClick =(e, msg)=>{
        console.log(e)
        console.log(e.target)
        console.log(msg)
    }


    render(){
        return(
            <div>
                <h3>Mas Sobre Eventos</h3>
                <button onClick={(e)=>this.handleClick(e, "Hola estoy pasando un parametro desde un evento")}>Mensaje</button>
                <h4>Los eventos como "onClick", etc;  son solo para elementos JSX,
                    no para nuestros componente como el "boton" de abajo, se debe 
                    pasar como parametro y ahi si renderizarlo como elemento JSX
                </h4>
                <Boton onMyClick={(e)=>this.handleClick(e, "Hola mensaje")}/>
            </div>
        )
    }
}