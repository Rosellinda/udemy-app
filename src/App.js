import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <h1>Hi, I am Roselle!</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Roselle" age="28"/>
        <Person name="Kevin"  age="29" >My Hobbies: Racing</Person>
        <Person name="Zelda" age="26"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m Roselle Burlasa'));
  }
}

export default App;
