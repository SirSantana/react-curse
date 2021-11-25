import React from "react";

const Auth =()=>{
    let auth = false
    let usuario = "Miguel",
        equipos = ["Real Madrid", "Millonarios", "Colombia", "Bayern Munchen"]
    return(
        <>
        <p>{auth ? `Bienvenido ${usuario}` : "Register Now"}</p>
        {auth ? 
        <p>Sigues estos equipos : 
          <ul>
          {equipos.map((el, index) => <li key={index}>{el}</li>)}
          </ul>
        </p> : <p>
        </p>}
        </>
    )

}
export default Auth
