import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Test Application</h1>
        </header>
        <section className="App-TodoList">
          <h2>List of things to do:</h2>
          <ul>
            <li>edit src/App.js</li>
            <li>Style the App for Mobile and Desktop</li>
            <li>Add the ability to mark an item as closed</li>
            <li>Add the ability to add a new item</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
