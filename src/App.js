import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const [team, setTeam] = useState([
    {
      name: "Gui",
      email: "",
      role: ""
    }])

  const handleSubmit = (newMember) => {
    setTeam([...team, newMember]);
  };
  console.log(team);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form onSubmit={handleSubmit}/>
        <h2>Your team: </h2>
        <div> {team.map(e=>(
          <div>
            <p>{e.name}</p>
          </div>
            ))}
          
        </div>
      </header>
      
    </div>
  );
}

export default App;
