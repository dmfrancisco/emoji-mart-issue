import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'emoji-mart/css/emoji-mart.css';
import data from 'emoji-mart/data/emojione.json';
import { NimblePicker } from 'emoji-mart';

class App extends Component {
  render() {
    return (
      <NimblePicker set='emojione' data={data} />
    );
  }
}

export default App;
