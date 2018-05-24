import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class App extends Component {
  render() {
    return (
      <Picker set='emojione' />
    );
  }
}

export default App;
