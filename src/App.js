import logo from './logo.svg';
import './App.css';
import Componente from './components/Components'
import Auth from './components/Auth'
import Propiedades from './components/Props';


const App=()=>{

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Componente msg={"Hola crack"} text={"Prueba"} />
        <hr/>
        <Auth />
        <hr/>
        <Propiedades />
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
