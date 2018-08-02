import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state is a PROPERTY of App that is only available in components that EXTEND Component which is imported from React.
  state = {
    persons: [
      { name: 'Thomas!', age: 28 },
      {name: 'mike', age: 25},
      { name: 'john', age: 26}
    ],
    showPersons: false
  }
//==================================
  switchNameHandler = (newName) => {
    // console.log('was clicked')
   //thise is not correct -- this.state.persons[0].name = 'max';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'mike', age: 25 },
        { name: 'john', age: 26 }
    ]})
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

    return <div className="App">
        <h1>Hello I'm a React.JS app</h1>
      <p>This is really working</p>
      {/* this syntax below does work, but it is ineffecient, so try to avoid it. use the 'bind' method as seen further below.*/}
         <button
        style= {myStyle}
        onClick={this.togglePersonsHandler} className="btn">
          Toggle Person
        </button>
      {this.state.showPersons ?
        <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        {/* this is an example of 'binding'  */}
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "green lanterns")}
          changed={this.nameChangedHandler}>
          My hobbies: BJJ
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div> :null
      }
    </div>;

    //this is the same thing as above, just not written in JSX. When workining with React.JS always use JSx syntax.
  
   // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'hello thomas!'));
}
}


export default App;
