import './App.css';
import Greet from './components/Greet';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Greet name="Anant"/>
      {/* <Welcome name="Shruti"/> */}
      {/* <Hello/>
      <Message/> */}
      <embed height="400px" width="100%" src="https://anant--bharti.web.app" title="Hello"/>
    </div>
  );
}

export default App;
