import logo from './logo.svg';
import './App.css';
import Componente from './components/Components'
import Auth from './components/Auth'
import Propiedades from './components/Props';
import Estado from './components/Estado_Class';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'
import Padre from './components/ComunicacionComponentes';
import Ciclovida from './components/CicloVida';

const App=()=>{

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Componente msg={"Hola crack"} text={"Prueba"} />
        <hr />
        <Auth />
        <hr />
        <Propiedades 
        string = {"Soy un string"} 
        number={23}
        arreglo ={[1,2,3,4]}
        objeto = {{nombre: "Sofia", edad:11}}
        funcion = {num => num*num}
        componenteReact = {<Componente msg={"Soy un msg enviado desde una prop"}/>}
        />

        <Estado/>
        <RenderizadoCondicional/>
        <RenderizadoElementos/>
        <EventosES6/>
        <br/>
        <EventosES7/>
        <MasSobreEventos/>
        <Padre/>  
        <Ciclovida/>

        <br/>
        <br/>
        <br/>

        <br/>
        <br/>

        <br/>

        
      </header>
    </div>
  );
  }


export default App;
