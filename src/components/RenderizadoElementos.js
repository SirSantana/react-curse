import React, {Component} from 'react'
import data from '../helpers/data.json'

function Teams(props){
    return(
        <li>
        <a href="">{props.el.barcelona.map(el => <li>{el}</li>)}</a>
        </li>
    )

}



export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state ={
            seasons: ["Invierno", "Primavera", "Verano", "Otoño"]
        }
    }


    render(){
        console.log(data)
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.seasons.map((el, index)=> <li key={index}>{el}</li>)}
                </ol>
                <ul>
                    {data.equipos.map(el => (<Teams el={el}/>))}
                </ul>
            </div>
        )
    }
}