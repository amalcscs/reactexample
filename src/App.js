import logo from './logo.svg';
import './App.css';
import react from 'react';
import Home from './Home';
import Demo from './Demo'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>welcome</h1>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  var name="arun"
 var age = 16
  return (
    <div>               
      <h1>react app</h1>
      <p>welcome {name}</p><br />
      <p>your age is {age} {age >= 18?"eligible":"not eligible"} for voting</p>
      <Demo name="teacher"/>
      <Home text="props working" test="second value of props"/>
      <Demo name="student"/>
     
      
    
       

     
      </div> 
  
      
    
  );
}

export default App;
