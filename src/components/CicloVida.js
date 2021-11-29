import React, {Component} from 'react'

export default class Ciclovida extends Component{

    constructor(props){
        super(props);

        this.state={
            hora: new Date().toLocaleTimeString()
        }
    }


    render(){
        return(
            <>
            <h2>Ciclo de Vida Componentes</h2>
            <h3>{this.state.hora}</h3>
            </>
        )
    }
}