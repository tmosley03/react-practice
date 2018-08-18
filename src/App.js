import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  //state is a PROPERTY of App that is only available in components that EXTEND Component which is imported from React.
  state = {
    persons: [
      {id: 0, name: 'Thomas!', age: 28 },
      {id: 1, name: 'Batman', age: 25},
      {id: 2, name: 'Mr. Jones', age: 26}
    ],
    showPersons: false
  }
//==================================
  deletePersonHandler = (personIndex) => {
    // *Note: ALWAYS UPDATE STATE IN AN IMMUTABLE FASHION. DO NOT MUTATE THE ORIGINAL STATE. INSTEAD, 1. CREATE A COPY 2. CHAGE THE COPY 3. UPDATE THE STATE WITH ".setState()"

     // ".slice()" method without args creates a copy of the persons ARRAY and     stores it in the new variable 'persons'.
    // const persons = this.state.persons.slice();

    // the spread '...' operator does the same thing (ES6)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
 }
//================================
  nameChangedHandler = (event, id) => {

//findIndex takes a function as and arg just like ".map()"
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }
//================================
  togglePersonsHandler = () => {
   // console.log("person handler");
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

//================================  
  render() {
    // this is an example of "inline styling". It is not true CSS and is scoped to this component.
    const myStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => { this.deletePersonHandler() }}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      );
      //change the color of the button when toggling
      myStyle.backgroundColor = 'red';
      myStyle[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }

    }
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');// classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');// classes = ['red', 'bold']
    }
    //

    return (
      //StyleRoot is a feature in RADIUM that allows for DOM object transformations (*** media queries ***, css transitions, element resizing)
      <StyleRoot>
      <div className="App">
        <h1>Hello I'm a React.JS app</h1>
      <p className={classes.join(' ')}>This is really working</p>
      {/* this syntax below does work, but it is ineffecient, so try to avoid it. use the 'bind' method as seen further below.*/}
         <button
        style= {myStyle}
        onClick={this.togglePersonsHandler} className="btn">
          Toggle Person
        </button>
      {/* this is from the variable above */}
     {persons}
        </div>
      </StyleRoot>);

    //this is the same thing as above, just not written in JSX. When workining with React.JS always use JSx syntax.
  
   // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'hello thomas!'));
}
}

//export App as an argument for RADIUM in order to use its CSS properties
export default Radium(App);
