import React, { Component } from 'react';
import './app.css';
import CardHeader from './Components/CardHeader';
import CardBody from './Components/CardBody';
import CardFooter from './Components/CardFooter';

class App extends Component {
  state = {
    cardData: [
      {id: 1, icon: '', name:'', tag:'', date: '', content: '', image: '', likes:'', comments: ''}
    ]
  }

  render() {
    return (
      <div className='card'>
        <div className='card-title'>
          <CardHeader/>
        </div>
        <CardBody/>
        <CardFooter/>
      </div>
    );
  }
}

export default App;
