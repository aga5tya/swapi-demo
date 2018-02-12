import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Cards from './Cards'

class App extends Component {
  render() {
    return (
      <div>
       <Header title={'(Movie and Films trivia)'} />
       <div>
         <Cards/>
       </div>
      </div>
    );
  }
}

export default App;
