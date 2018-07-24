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
    ]
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
  render() {
    return <div className="App">
        <h1>Hello I'm a React.JS app</h1>
      <p>This is really working</p>
      {/* this syntax below does work, but it is ineffecient, so try to avoid it. use the 'bind' method as seen further below.*/}
        <button onClick={() => this.switchNameHandler("DOLAMITE!!")} className="btn">
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "green lanterns")}
        changed={this.nameChangedHandler}>
          My hobbies: BJJ
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>;

    //this is the same thing as above, just not written in JSX. When workining with React.JS always use JSx syntax.
  
   // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'hello thomas!'));
}
}


export default App;
