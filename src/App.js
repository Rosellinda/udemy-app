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
    otherState: 'some other value',
  });

  const [showPersonState, setShowPersons] = useState ({
    showPersons: false
  })

  // const [otherState,setOtherState] = useState('some other value');
  // console.log(personsState, otherState);
  // const switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    //Dont do this: this.state.persons[0].name = "Rosellinda";
  //   setPersonsState({
  //     persons: [
  //       {name: 'Rosellinda', age: 28},
  //       {name: 'Kevin', age: 29},
  //       {name: 'Zelda', age: 27}
  //     ]
  //   });
  // };
  
  const nameChangedHandler = (e) => {
    setPersonsState({
      persons: [
        {name: 'Rosellinda', age: 28},
        {name: e.target.value, age: 29},
        {name: 'Zelda', age: 26}
      ]
    });
  }

  const togglePersonHandler = () => {
    const doesShow = showPersonState.showPersons;
    setShowPersons({showPersons: !doesShow});
  }

  const style = {
    backgroundColor: 'pink',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;
  
  if(showPersonState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map(person => {
          return <Person name={person.name} age={person.age}/>
        })}
      </div> 
    )
  }
  return (
    <div className="App">
      <h1>Hi, I am Roselle!</h1>
      <p>This is really working!</p>
      <button 
        style={style}
        onClick={togglePersonHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m Roselle Burlasa'));
}

export default app;