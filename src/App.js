import React, { Component } from 'react';
import './app.css';
import CardHeader from './Components/CardHeader'

class App extends Component {
  state = {
    cardData: [
      {id: 1, icon: '', name:'', tag:'', date: '', content: '', image: '', likes:'', comments: ''}
    ]
  }

  render() {
    return (
      <CardHeader/>
    );
  }
}

export default App;
