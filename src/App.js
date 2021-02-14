import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Roselle', age: 28},
      {name: 'Kevin', age: 29},
      {name: 'Zelda', age: 26}
    ],
    otherState: 'some other value'
  });

  // const [otherState,setOtherState] = useState('some other value');

  // console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    //Dont do this: this.state.persons[0].name = "Rosellinda";
    setPersonsState({
      persons: [
        {name: 'Rosellinda', age: 28},
        {name: 'Kevin', age: 29},
        {name: 'Zelda', age: 27}
      ]
    });
  };
  
  const nameChangedHandler = (e) => {
    setPersonsState({
      persons: [
        {name: 'Rosellinda', age: 28},
        {name: e.target.value, age: 29},
        {name: 'Zelda', age: 26}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I am Roselle!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        change={nameChangedHandler}
        >My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m Roselle Burlasa'));
}

export default app;