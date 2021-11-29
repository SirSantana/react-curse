import React, {Component, useState} from 'react'

function Login(){
    return(
        <div>
            <h2>Login</h2>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h2>Logout</h2>
        </div>
    )
}
export default class RenderizadoCondicional extends Component{

    constructor(props){
        super(props);
        this.state={
            session: false
        }
    }

    render(){
        return(
            <>
            <h2>RenderizadoCondicional</h2>
            {this.state.session? <Login/> : <Logout/>}
            </>
        )
    }
}

// export default function RenderizadoCondicional(){
//     const [login, setLogin] = useState(false)
//     return(
//         <div>
//             {login ? <Login/> : <Logout/>}
//         </div>

//     )
// }