import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state is a PROPERTY of App that is only available in components that EXTEND Component which is imported from React.
  state = {
    persons: [
      {id: 0, name: 'Thomas!', age: 28 },
      {id: 1, name: 'mike', age: 25},
      {id: 2, name: 'john', age: 26}
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
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'randy', age: 28 },
        { name: event.target.value, age: 25 },
        { name: 'john', age: 26 }
      ]
    })
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => {this.deletePersonHandler()}}
              name={person.name}
              age={person.age}
              key= {person.id} />
          })}

         
        </div> 
      );
    }

    //

    return <div className="App">
        <h1>Hello I'm a React.JS app</h1>
      <p>This is really working</p>
      {/* this syntax below does work, but it is ineffecient, so try to avoid it. use the 'bind' method as seen further below.*/}
         <button
        style= {myStyle}
        onClick={this.togglePersonsHandler} className="btn">
          Toggle Person
        </button>
      {/* this is from the variable above */}
     {persons}
        </div>;

    //this is the same thing as above, just not written in JSX. When workining with React.JS always use JSx syntax.
  
   // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'hello thomas!'));
}
}


export default App;
