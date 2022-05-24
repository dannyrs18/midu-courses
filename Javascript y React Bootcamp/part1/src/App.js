import './App.css';

const Mensaje = ({color, message}) => {
  return (
    <h1 style={{color}}> {message} </h1>
  )
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Hola mundo"/>
      <Mensaje color="yellow" message="Estamos en un Curso"/>
      <Mensaje color="browm" message="React"/>
    </div>
  );
}

export default App;
