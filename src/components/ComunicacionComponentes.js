import React, {Component} from 'react'

export default class Padre extends Component {


    state={
        contador: 0
    }
    
    Aumentar=()=>{
        this.setState({
            contador: this.state.contador + 1
        })
    }
    Restar=()=>{
        this.setState({
            contador: this.state.contador - 1
        })
    }


    render(){
        return(
            <div>
                <h2>Afectacion Componente Hijo a Padre</h2>
                <h3>{this.state.contador}</h3>
                <Hijo Aumentar={this.Aumentar} Restar={this.Restar}/>
            </div>
        )
    }
}

function Hijo(props){
    return(
        <>
        <button onClick={props.Aumentar}>Aumentar</button>
        <button onClick={props.Restar}>Restar</button>
        </>
    )
}