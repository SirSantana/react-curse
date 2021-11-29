import React from "react";
import PropTypes from 'prop-types'

export default function Propiedades(props){
    let variable = Propiedades.defaultProps.porDefecto[2][2]
    return(
        <>
        <h2>{props.porDefecto[2].map((el, index)=> <li key={index}>{el}</li>)}</h2>
        <h2>{variable.map((el, index)=> <li key={index}>{el}</li>)}</h2>
        <li>
            <ul> {props.string}</ul>
            <ul> {props.number}</ul>
            <ul> {props.arreglo.join(",")}</ul>
            <ul> {`${props.objeto.nombre} - ${props.objeto.edad}`}</ul>
            <ul>{props.arreglo.map(props.funcion).join(",")}</ul>
            <ul>{props.componenteReact}</ul>
        </li>
        </>

    )

}

Propiedades.defaultProps={
    porDefecto: ["MIGUEL", "LITO", ["Crack", "Lito",["Lore", "sofi"]]]
}
Propiedades.propTypes={
    number : PropTypes.number,
    string: PropTypes.string
}

